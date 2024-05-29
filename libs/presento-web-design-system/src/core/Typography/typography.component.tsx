import React, { PropsWithChildren } from 'react';

import { TypographyProps } from './typography.types';

export const Typography: React.FC<PropsWithChildren<TypographyProps>> = (
  props,
) => {
  const { variant, component, children, className } = props;
  return <p>{children}</p>;
};
