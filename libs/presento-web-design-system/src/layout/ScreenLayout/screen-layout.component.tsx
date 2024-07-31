import React, { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { ScreenLayoutProps } from './screen-layout.types';
import { ScreenHeader } from '../ScreenHeader';

export const ScreenLayout: React.FC<PropsWithChildren<ScreenLayoutProps>> = (
  props,
) => {
  const { children, user } = props;
  return (
    <Stack py={2} px={2} spacing={4} alignItems="center">
      <ScreenHeader user={user} />
      <Container maxWidth="xl" disableGutters>
        <Stack spacing={2}>{children}</Stack>
      </Container>
    </Stack>
  );
};
