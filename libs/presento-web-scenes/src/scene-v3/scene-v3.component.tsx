'use client';

import React, { useRef } from 'react';
import { Canvas, RootState } from '@react-three/fiber';
import {
  Paper,
  SceneConfiguration as SceneConfigurationComponent,
} from '@presento/presento-web-design-system';
import { Stack } from '@mui/material';
import { Environment } from '@react-three/drei';

import { SceneModel } from './scene-v3.model';
import { SceneConfiguration } from '../components/scene-configuration.component';
import { SceneComponentProps } from '../types';
import { DEFAULT_DEVICE_SCREEN_IMAGE_MOBILE } from '../constants';
import { useCameraOrientation } from '../hooks/use-camera-orientation';
import { useGenerateSceneScreenshot } from '../hooks/use-generate-scene-screenshot.hook';
import { useDeviceScreenImageState } from '../hooks/use-device-screen-image-state.hook';
import { useCameraZoom } from '../hooks/use-camera-zoom';
import { useCameraPosition } from '../hooks/use-camera-position';
import { useRenderQuality } from '../hooks/use-render-quality';

export const SceneV3: React.FC<SceneComponentProps> = (props) => {
  const { renderEnabled = true } = props;

  const rootStateRef = useRef<RootState | null>(null);
  const cameraOrientation = useCameraOrientation({ rootStateRef });
  const generateSceneScreenshot = useGenerateSceneScreenshot({ rootStateRef });
  const imageState = useDeviceScreenImageState();
  const cameraZoom = useCameraZoom();
  const cameraPosition = useCameraPosition({ rootStateRef });
  const renderQuality = useRenderQuality();

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Paper
        id="canvas-container"
        style={{
          minHeight: cameraOrientation.resolution.height,
          height: cameraOrientation.resolution.height,
          minWidth: cameraOrientation.resolution.width,
          width: cameraOrientation.resolution.width,
          overflow: 'hidden',
        }}
      >
        {renderEnabled && (
          <Canvas
            shadows
            gl={{ preserveDrawingBuffer: true }}
            dpr={renderQuality.pdr}
            frameloop="demand"
          >
            <Environment preset="city" environmentIntensity={0} />
            <SceneModel />
            <SceneConfiguration
              deviceName="TODO DELETE" // delete / make optional
              devicePosition={[0, 0, 0]} // delete / make optional
              deviceRotation={[0, 0, 0]} // delete / make optional
              cameraZoomValue={cameraZoom.value}
              screenImageSrc={
                imageState.imageSrc || DEFAULT_DEVICE_SCREEN_IMAGE_MOBILE
              }
              screenMeshName="x-screen-view"
              onRootState={(rootState) => (rootStateRef.current = rootState)}
            />
          </Canvas>
        )}
      </Paper>

      <SceneConfigurationComponent
        sx={{ flex: 1, maxWidth: 400 }}
        onScreenshotClick={generateSceneScreenshot}
        imageSelector={{
          enabled: true,
          imageSrc: imageState.imageSrc,
          onUploadClick: imageState.selectImageSrc,
          onDeleteClick: imageState.reset,
        }}
        cameraOrientation={{
          enabled: true,
          orientation: cameraOrientation.orientation,
          onChange: cameraOrientation.update,
        }}
        cameraZoom={{
          enabled: true,
          value: cameraZoom.value,
          onChange: cameraZoom.setValue,
        }}
        renderQuality={{
          enabled: true,
          value: renderQuality.value,
          onChange: renderQuality.update,
        }}
        cameraPosition={{
          enabled: true,
          onChange: cameraPosition.move,
        }}
      />
    </Stack>
  );
};
