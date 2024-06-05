import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Paper } from '@presento/presento-web-design-system';

import { SceneModel } from './scene-v1.model';
import { SceneConfiguration } from '../components/scene-configuration.component';

export const SceneV1: React.FC = () => {
  return (
    <Paper noPaddings style={{ height: 700, width: 1000 }}>
      <Canvas shadows style={{ height: 700, width: 1000 }}>
        <SceneModel />
        <SceneConfiguration
          cameraName="x-scene-camera"
          screenImageSrc="/screenshots/default.png"
          screenMeshName="screen01"
        />
      </Canvas>
    </Paper>
  );
};
