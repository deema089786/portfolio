import React from 'react';
import { Html } from '@react-three/drei';

import {
  SCENE_SCREEN_VIEW_HTML_CLASS,
  SCENE_SCREEN_VIEW_HTML_ID,
  DEFAULT_DEVICE_SCREEN_IMAGE_MOBILE,
  DEFAULT_DEVICE_SCREEN_IMAGE_LAPTOP,
} from '../constants';

type Device = 'iphone-14' | 'mac-book-pro-m1-14';

type ScreenHtmlProps = {
  device: Device;
};

const settings: Record<
  Device,
  {
    size: { width: number; height: number };
    position: [number, number, number];
    scale: number;
    defaultImage: string;
  }
> = {
  'iphone-14': {
    size: { width: 1170, height: 2532 }, //  259 563
    position: [0, 0.01, -0.01],
    scale: 0.2215,
    defaultImage: DEFAULT_DEVICE_SCREEN_IMAGE_MOBILE,
  },
  'mac-book-pro-m1-14': {
    size: { width: 3024, height: 1964 },
    position: [0, 0, 0],
    scale: 0.00625,
    defaultImage: DEFAULT_DEVICE_SCREEN_IMAGE_LAPTOP,
  },
};

export const ScreenHtml: React.FC<ScreenHtmlProps> = (props) => {
  const { device } = props;
  const { size, position, scale, defaultImage } = settings[device];

  return (
    <Html
      wrapperClass={SCENE_SCREEN_VIEW_HTML_CLASS}
      position={position}
      style={{
        background: 'black',
        width: size.width,
        height: size.height,
      }}
      transform
      occlude="blending"
      zIndexRange={[100, 0]}
      scale={scale}
      prepend
    >
      <div
        id={SCENE_SCREEN_VIEW_HTML_ID}
        style={{
          width: '100%',
          height: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url(${defaultImage})`,
        }}
      />
    </Html>
  );
};
