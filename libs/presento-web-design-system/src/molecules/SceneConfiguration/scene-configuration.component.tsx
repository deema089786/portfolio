import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { SceneConfigurationProps } from './scene-configuration.types';
import { Button, Paper } from '../../atoms';

export const SceneConfiguration: React.FC<SceneConfigurationProps> = (
  props,
) => {
  const { test } = props;
  return (
    <Paper>
      <Stack>
        <TextField placeholder="Select Phone Screen Image" />
        <Button size="large">Generate Image</Button>
      </Stack>
    </Paper>
  );
};
