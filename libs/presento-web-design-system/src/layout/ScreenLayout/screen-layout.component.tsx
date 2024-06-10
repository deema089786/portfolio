import React, { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { ScreenLayoutProps } from './screen-layout.types';
import { ScreenHeader } from '../ScreenHeader';

export const ScreenLayout: React.FC<PropsWithChildren<ScreenLayoutProps>> = (
  props,
) => {
  const { children } = props;
  return (
    <Stack>
      <ScreenHeader />
      <Container maxWidth="xl" disableGutters>
        {children}
      </Container>
    </Stack>
  );
};
