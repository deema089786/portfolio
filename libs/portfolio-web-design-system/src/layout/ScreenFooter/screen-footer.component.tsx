import React from 'react';
import { Stack, Paper } from '@mui/material';

import { ScreenFooterProps } from './screen-footer.types';

export const ScreenFooter: React.FC<ScreenFooterProps> = (props) => {
  return (
    <Stack
      component={Paper}
      spacing={2}
      p={2}
      px={4}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      footer
    </Stack>
  );
};
