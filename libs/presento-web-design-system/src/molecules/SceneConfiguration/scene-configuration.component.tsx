import React from 'react';
import { styled } from '@pigment-css/react';

import { SceneConfigurationProps } from './scene-configuration.types';
import { Button, Paper } from '../../atoms';
import { Stack } from '../../core';
import { SelectField, TextField } from '../../inputs';

export const SceneConfiguration: React.FC<SceneConfigurationProps> = (
  props,
) => {
  const { test } = props;
  return (
    <Paper>
      <Stack>
        <TextField
          value={''}
          placeholder="Select Phone Screen Image"
          icon="1"
        />
        <SelectField value={''} placeholder="Select Phone Color" />
        <Button size="large">Generate Image</Button>
      </Stack>
    </Paper>
  );
};
