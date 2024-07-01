import React from 'react';
import { Html } from '@react-three/drei';

import {
  DEFAULT_DEVICE_SCREEN_IMAGE,
  SCENE_SCREEN_VIEW_HTML_CLASS,
  SCENE_SCREEN_VIEW_HTML_ID,
} from '../constants';

const DEFAULT_WIDTH = 259 as const;
const DEFAULT_HEIGHT = 563 as const;

type ScreenHtmlProps = {
  width?: number;
  height?: number;
};

export const ScreenHtml: React.FC<ScreenHtmlProps> = (props) => {
  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT } = props;

  return (
    <Html
      wrapperClass={SCENE_SCREEN_VIEW_HTML_CLASS}
      position={[0, 0.01, -0.01]}
      style={{
        background: 'black',
        width,
        height,
      }}
      transform
      occlude="blending"
      zIndexRange={[100, 0]}
      fullscreen
      center
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
