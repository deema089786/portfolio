import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { a as three } from '@react-spring/three';
import { Euler, MathUtils } from 'three';

import { ModelGLTF } from '../components/model-gltf';

export const SceneV1: React.FC = () => {
  return (
    <div id="scene-v1-canvas-container">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, -0.5], fov: 35 }}
        style={{ height: 700 }}
      >
        <three.pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={'#960d0d'}
        />
        <Suspense fallback={null}>
          <ModelGLTF
            src="/models/iphone-13-pro.scene-v1.glb"
            groupProps={{
              rotation: new Euler(
                MathUtils.degToRad(0),
                MathUtils.degToRad(130),
                MathUtils.degToRad(0),
                'XYZ',
              ),
            }}
          />
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
