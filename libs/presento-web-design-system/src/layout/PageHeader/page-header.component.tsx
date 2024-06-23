import React from 'react';
import Stack from '@mui/material/Stack';

import { PageHeaderProps } from './page-header.types';
import { Typography } from '../../core';

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { title, description } = props;
  return (
    <Stack>
      <Typography component="h1" variant="h2">
        {title}
      </Typography>
      {description && (
        <Typography component="p" variant="subtitle1">
          {description}
        </Typography>
      )}
    </Stack>
  );
};
