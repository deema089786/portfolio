import React, { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';

import { CatalogLayoutProps } from './catalog-layout.types';

export const CatalogLayout: React.FC<PropsWithChildren<CatalogLayoutProps>> = (
  props,
) => {
  const { children } = props;
  return <Stack>{children}</Stack>;
};
