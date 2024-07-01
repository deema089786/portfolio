'use client';

import React, { useRef } from 'react';
import { Canvas, RootState } from '@react-three/fiber';
import {
  Paper,
  SceneConfiguration as SceneConfigurationComponent,
} from '@presento/presento-web-design-system';
import { Stack } from '@mui/material';
import { Environment } from '@react-three/drei';

import { SceneModel } from './scene-v1.model';
import { SceneConfiguration } from '../components/scene-configuration.component';
import { SceneComponentProps } from '../types';
import { useCameraControls } from '../hooks/use-camera-controls';
import { useDevicePositionControls } from '../hooks/use-device-position-controls.hook';
import { DEFAULT_DEVICE_SCREEN_IMAGE } from '../constants';
import { useCameraOrientation } from '../hooks/use-camera-orientation';
import { useGenerateSceneScreenshot } from '../hooks/use-generate-scene-screenshot.hook';
import { useDeviceScreenImageState } from '../hooks/use-device-screen-image-state.hook';

export const SceneV1: React.FC<SceneComponentProps> = (props) => {
  const { renderEnabled = true } = props;

  const rootStateRef = useRef<RootState | null>(null);

  const cameraControls = useCameraControls();
  const cameraOrientation = useCameraOrientation();
  const devicePositionControls = useDevicePositionControls();
  const generateSceneScreenshot = useGenerateSceneScreenshot({ rootStateRef });
  const imageState = useDeviceScreenImageState();

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
          <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
            <Environment preset="city" environmentIntensity={0} />
            <SceneModel />
            <SceneConfiguration
              deviceName="x-device-group"
              devicePosition={devicePositionControls.position}
              deviceRotation={devicePositionControls.rotation}
              screenImageSrc={
                imageState.imageSrc || DEFAULT_DEVICE_SCREEN_IMAGE
              }
              screenMeshName="x-screen-view"
              onRootState={(rootState) => (rootStateRef.current = rootState)}
            />
          </Canvas>
        )}
      </Paper>

      <SceneConfigurationComponent
        sx={{ flex: 1, maxWidth: 400 }}
        onUploadImageClick={imageState.selectImageSrc}
        onDeleteImageClick={imageState.reset}
        onScreenshotClick={generateSceneScreenshot}
        imageSrc={imageState.imageSrc}
        onDeviceMove={devicePositionControls.move}
        onDeviceRotate={devicePositionControls.rotate}
        cameraOrientation={cameraOrientation.orientation}
        onCameraOrientationChange={cameraOrientation.update}
      />
    </Stack>
  );
};
