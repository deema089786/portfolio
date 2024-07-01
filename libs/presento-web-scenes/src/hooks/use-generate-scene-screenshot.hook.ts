import { RootState } from '@react-three/fiber';
import { MutableRefObject, useCallback } from 'react';
import domtoimage from 'dom-to-image-more';

import { SCENE_SCREEN_VIEW_HTML_CLASS } from '../constants';

const getDeviceContent = async (
  htmlElement: HTMLElement,
): Promise<string | null> => {
  try {
    const dataUrl: string = await domtoimage.toPng(htmlElement);
    return dataUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
};

type UseGenerateSceneScreenshotParams = {
  rootStateRef: MutableRefObject<RootState | null>;
};

export const useGenerateSceneScreenshot = (
  params: UseGenerateSceneScreenshotParams,
) => {
  const { rootStateRef } = params;
  return useCallback(async () => {
    const rootState = rootStateRef.current;
    if (!rootState) return;
    const { gl, scene, camera } = rootState;

    gl.render(scene, camera);
    const threeJsImage = gl.domElement.toDataURL('image/png');

    // Capture the HTML content
    const htmlElement = [
      // @ts-expect-error
      ...document.getElementsByClassName(SCENE_SCREEN_VIEW_HTML_CLASS),
    ][0];
    if (!htmlElement) return;
    const htmlImage = await getDeviceContent(htmlElement);
    if (!htmlImage) return;

    // Create a canvas to combine both images
    const combinedCanvas = document.createElement('canvas');
    const ctx = combinedCanvas.getContext('2d');
    if (!ctx) return;

    combinedCanvas.width = gl.domElement.width;
    combinedCanvas.height = gl.domElement.height;

    // Draw the Three.js scene
    const htmlImageElement = new Image();
    htmlImageElement.src = htmlImage;
    htmlImageElement.onload = () => {
      ctx.drawImage(
        htmlImageElement,
        0,
        0,
        gl.domElement.width,
        gl.domElement.height,
      );

      // Draw the HTML content
      const threeJsImageElement = new Image();
      threeJsImageElement.src = threeJsImage;
      threeJsImageElement.onload = () => {
        ctx.drawImage(
          threeJsImageElement,
          0,
          0,
          gl.domElement.width,
          gl.domElement.height,
        );
        // The final combined image
        const combinedImage = combinedCanvas.toDataURL('image/png');

        // Download or display the combined image as needed
        const link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = combinedImage;
        link.click();
      };
    };
  }, [rootStateRef]);
};
