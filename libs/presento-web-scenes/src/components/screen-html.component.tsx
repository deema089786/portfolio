import React from 'react';
import { Html } from '@react-three/drei';

export const ScreenHtml: React.FC = () => {
  return (
    <Html
      wrapperClass="wrapper-html"
      scale={1}
      position={[0, 0.01, -0.01]}
      prepend
      style={{
        background: 'black',
        width: 259,
        height: 563,
      }}
      transform
      occlude="blending"
      zIndexRange={[100, 0]}
    >
      <div
        id="x-screen-view-html"
        style={{
          width: 259,
          height: 563,
          borderRadius: '20px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
    </Html>
  );
};
