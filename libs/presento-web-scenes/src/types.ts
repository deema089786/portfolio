import React from 'react';
import { TagPropsColor } from '@presento/presento-web-design-system';

export type SceneInfoTag = {
  id: string;
  label: string;
  color: TagPropsColor;
};

export type SceneInfo = {
  id: string;
  previewImageSrc: string;
  title: string;
  description: string;
  component: React.FC<SceneComponentProps>;
  tags: SceneInfoTag[];
};

export type SceneComponentProps = {
  renderEnabled?: boolean;
};
