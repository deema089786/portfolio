'use client';

import React, { useCallback, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Paper,
  SceneConfiguration as SceneConfigurationComponent,
} from '@presento/presento-web-design-system';
import { Stack } from '@mui/material';
import { getSrcFromFile, uploadClintFileToApp } from '@presento/utils';
import { WebGLRenderer } from 'three';
import { Environment } from '@react-three/drei';

import { SceneModel } from './scene-v1.model';
import { SceneConfiguration } from '../components/scene-configuration.component';
import { SceneComponentProps } from '../types';
import { useCameraControls } from '../hooks/use-camera-controls';
import { useDevicePositionControls } from '../hooks/use-device-position-controls.hook';

const DEFAULT_DEVICE_SCREEN_IMAGE = '/screenshots/default.png' as const;

export const SceneV1: React.FC<SceneComponentProps> = (props) => {
  const { renderEnabled = true } = props;

  const [deviceScreenImageSrc, setDeviceScreenImageSrc] = useState<
    string | null
  >(null);

  const glRef = useRef<WebGLRenderer | null>(null);
  const handleGl = useCallback((gl: WebGLRenderer) => (glRef.current = gl), []);

  const handleSelectImage = useCallback(async () => {
    const file = await uploadClintFileToApp();
    if (!file) return;
    const fileSrc = await getSrcFromFile(file);
    if (!fileSrc) return;
    setDeviceScreenImageSrc(fileSrc);
  }, []);

  const handleScreenshot = useCallback(() => {
    const gl = glRef.current;
    if (!gl) return;
    const image = glRef.current?.domElement.toDataURL('image/png');
    if (!image) return;
    const a = document.createElement('a');
    a.setAttribute('download', 'screenshot.png');
    a.setAttribute('href', image);
    a.click();
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
              onGL={handleGl}
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
