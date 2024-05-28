import React from 'react';
import { Canvas } from '@react-three/fiber';

import { Model } from './Scene-v1';
import { SceneConfiguration } from '../components/scene-configuration.component';

export const SceneV1: React.FC = () => {
  return (
    <div id={'root-canvas'}>
      <Canvas shadows style={{ height: 700, width: 1000 }}>
        <Model scale={1} />
        <SceneConfiguration
          cameraName="x-scene-camera"
          screenImageSrc="/screenshots/default.png"
          screenMeshName="screen01"
        />
      </Canvas>
    </div>
  );
};
