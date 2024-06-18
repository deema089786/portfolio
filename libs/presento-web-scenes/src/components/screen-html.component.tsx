import React from 'react';
import { Html } from '@react-three/drei';

export const ScreenHtml: React.FC = () => {
  return (
    <Html
      scale={1}
      position={[0, 0, 0.001]}
      style={{
        background: 'red',
        width: 280,
        height: 550,
        borderRadius: '20px',
      }}
      transform
      occlude="blending"
    >
      <div
        style={{
          background: 'green',
          zIndex: 10,
        }}
      >
        test text
      </div>
      <p>test text</p>
    </Html>
  );
};
