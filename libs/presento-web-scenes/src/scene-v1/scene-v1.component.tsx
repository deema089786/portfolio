import React from 'react';
import { Canvas } from '@react-three/fiber';

import { Model } from './Scene-v1';
import { PathTracer } from '../components/path-tracer';

export const SceneV1: React.FC = () => {
  return (
    <div id={'root-canvas'}>
      <Canvas style={{ height: 700, width: 1000 }}>
        <Model />
        <PathTracer />
      </Canvas>
    </div>
  );
};
