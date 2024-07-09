import React from 'react';
import { Html } from '@react-three/drei';

import {
  DEFAULT_DEVICE_SCREEN_IMAGE,
  SCENE_SCREEN_VIEW_HTML_CLASS,
  SCENE_SCREEN_VIEW_HTML_ID,
} from '../constants';

type Device = 'iphone-14' | 'mac-book-pro-m1-14';

type ScreenHtmlProps = {
  width?: number;
  height?: number;
  device: Device;
};

const settings: Record<
  Device,
  {
    size: { width: number; height: number };
    position: [number, number, number];
  }
> = {
  'iphone-14': {
    size: { width: 259, height: 563 },
    position: [0, 0.01, -0.01],
  },
  'mac-book-pro-m1-14': {
    size: { width: 620, height: 402 },
    position: [0, 0, 0],
  },
};

export const ScreenHtml: React.FC<ScreenHtmlProps> = (props) => {
  const { width, height, device } = props;
  const { size, position } = settings[device];

  return (
    <Html
      wrapperClass={SCENE_SCREEN_VIEW_HTML_CLASS}
      position={position}
      style={{
        background: 'black',
        width: width || size.width,
        height: height || size.height,
      }}
      transform
      occlude="blending"
      zIndexRange={[100, 0]}
    >
      <div
        id={SCENE_SCREEN_VIEW_HTML_ID}
        style={{
          width: '100%',
          height: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url(${DEFAULT_DEVICE_SCREEN_IMAGE})`,
        }}
      />
    </Html>
  );
};
