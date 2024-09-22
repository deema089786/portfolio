import React, { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { ScreenHeader } from '../ScreenHeader';
import { ScreenFooter } from '../ScreenFooter';

export const ScreenLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Stack
      spacing={4}
      sx={{
        p: 1,
        pb: 3,
        height: '100svh',
        overflow: 'hidden',
        overflowY: 'auto',
        bgcolor: 'background.default',
        alignItems: 'center',
      }}
    >
      <ScreenHeader />
      <Container maxWidth="md" disableGutters sx={{ flex: 1 }}>
        <Stack spacing={2}>{children}</Stack>
      </Container>
      <ScreenFooter />
    </Stack>
  );
};
