import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { SceneConfigurationProps } from './scene-configuration.types';
import { Button, Paper } from '../../atoms';
import { ImagePicker } from './components';

export const SceneConfiguration: React.FC<SceneConfigurationProps> = (
  props,
) => {
  const {
    sx,
    onUploadImageClick,
    onDeleteImageClick,
    onScreenshotClick,
    imageSrc,
  } = props;

  return (
    <Stack p={1} spacing={2} component={Paper} sx={sx}>
      <ImagePicker
        onUploadClick={onUploadImageClick}
        onDeleteClick={onDeleteImageClick}
        src={imageSrc}
      />
      <TextField placeholder="Select Phone Screen Image" />
      <Button onClick={onScreenshotClick} size="large" variant="contained">
        Generate Image
      </Button>
    </Stack>
  );
};
