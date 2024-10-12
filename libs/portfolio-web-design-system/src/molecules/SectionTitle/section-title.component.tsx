import React, { PropsWithChildren } from 'react';
import { Typography } from '@mui/material';

export const SectionTitle: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Typography
      variant="h4"
      component="h2"
      color="textPrimary"
      gutterBottom
      sx={{ pl: 1 }}
    >
      {children}
    </Typography>
  );
};
