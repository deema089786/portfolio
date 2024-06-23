import React from 'react';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';

import { SceneConfigurationProps } from './scene-configuration.types';
import { Button, Paper } from '../../atoms';
import { ImagePicker } from './components';
import { SceneDeviceControls } from '../SceneDeviceControls';

export const SceneConfiguration: React.FC<SceneConfigurationProps> = (
  props,
) => {
  const {
    sx,
    onUploadImageClick,
    onDeleteImageClick,
    onScreenshotClick,
    imageSrc,
    onDeviceMove,
    onDeviceRotate,
  } = props;

  return (
    <Stack p={1} spacing={2} component={Paper} sx={sx}>
      <ImagePicker
        onUploadClick={onUploadImageClick}
        onDeleteClick={onDeleteImageClick}
        src={imageSrc}
      />
      <Divider />
      <SceneDeviceControls onMove={onDeviceMove} onRotate={onDeviceRotate} />
      <Button onClick={onScreenshotClick} size="large" variant="contained">
        Generate Image
      </Button>
    </Stack>
  );
};
