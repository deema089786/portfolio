'use client';

import React, { useCallback, useRef, useState } from 'react';
import { Canvas, RootState } from '@react-three/fiber';
import {
  Paper,
  SceneConfiguration as SceneConfigurationComponent,
} from '@presento/presento-web-design-system';
import { Stack } from '@mui/material';
import { getSrcFromFile, uploadClintFileToApp } from '@presento/utils';
import { Environment } from '@react-three/drei';
import domtoimage from 'dom-to-image-more';

import { SceneModel } from './scene-v1.model';
import { SceneConfiguration } from '../components/scene-configuration.component';
import { SceneComponentProps } from '../types';
import { useCameraControls } from '../hooks/use-camera-controls';
import { useDevicePositionControls } from '../hooks/use-device-position-controls.hook';

const DEFAULT_DEVICE_SCREEN_IMAGE = '/screenshots/default.png' as const;

const getDeviceContent = async (
  htmlElement: HTMLElement,
): Promise<string | null> => {
  try {
    const dataUrl: string = await domtoimage.toPng(htmlElement);
    const img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
    return dataUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const SceneV1: React.FC<SceneComponentProps> = (props) => {
  const { renderEnabled = true } = props;

  const [deviceScreenImageSrc, setDeviceScreenImageSrc] = useState<
    string | null
  >(null);

  const rootStateRef = useRef<RootState | null>(null);
  const handleRootState = useCallback(
    (rootState: RootState) => (rootStateRef.current = rootState),
    [],
  );

  const handleSelectImage = useCallback(async () => {
    const file = await uploadClintFileToApp();
    if (!file) return;
    const fileSrc = await getSrcFromFile(file);
    if (!fileSrc) return;
    setDeviceScreenImageSrc(fileSrc);
  }, []);

  const handleScreenshot = useCallback(async () => {
    const rootState = rootStateRef.current;
    if (!rootState) return;
    const { gl, scene, camera } = rootState;

    gl.render(scene, camera);
    const threeJsImage = gl.domElement.toDataURL('image/png');

    // Capture the HTML content
    // @ts-expect-error
    const htmlElement = [...document.getElementsByClassName('wrapper-html')][0];
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
  }, []);

  const cameraControls = useCameraControls();
  const devicePositionControls = useDevicePositionControls();

  return (
    <Stack direction="row" spacing={2}>
      <Paper
        id="canvas-container"
        style={{
          position: 'relative',
          minHeight: 700,
          height: 700,
          minWidth: 1000,
          width: 1000,
          overflow: 'hidden',
        }}
      >
        <canvas
          id="screenshotCanvas"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            // widht: 100,
            // height: 100,
          }}
        ></canvas>

        {renderEnabled && (
          <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
            <Environment preset="city" environmentIntensity={0} />
            <SceneModel />
            <SceneConfiguration
              cameraName="x-scene-camera"
              cameraPosition={cameraControls.position}
              cameraRotation={cameraControls.rotation}
              deviceName="x-device-group"
              devicePosition={devicePositionControls.position}
              deviceRotation={devicePositionControls.rotation}
              screenImageSrc={
                deviceScreenImageSrc || DEFAULT_DEVICE_SCREEN_IMAGE
              }
              screenMeshName="x-screen-view"
              onRootState={handleRootState}
            />
          </Canvas>
        )}
      </Paper>

      <SceneConfigurationComponent
        sx={{ flex: 1 }}
        onUploadImageClick={handleSelectImage}
        onDeleteImageClick={() => setDeviceScreenImageSrc(null)}
        onScreenshotClick={handleScreenshot}
        imageSrc={deviceScreenImageSrc}
        onDeviceMove={devicePositionControls.move}
        onDeviceRotate={devicePositionControls.rotate}
      />
    </Stack>
  );
};
