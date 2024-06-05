import React from 'react';

export type PaperPropsVariant = 'round' | 'square';
export type PaperPropsShadowSize = 'small' | 'medium' | 'large';

export type PaperProps = {
  variant?: PaperPropsVariant;
  shadowSize?: PaperPropsShadowSize;
  className?: string;
  noPaddings?: boolean;
  style?: React.CSSProperties;
};
