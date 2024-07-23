import React from 'react';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';

import { SceneConfigurationProps } from './scene-configuration.types';
import { Button, Paper } from '../../atoms';
import {
  ImagePicker,
  CameraOrientationSelector,
  CameraZoomSlider,
  CameraPositionControls,
} from './components';
import { SceneDeviceControls } from '../SceneDeviceControls';
import { RenderQuality } from './components/RenderQuality';

export const SceneConfiguration: React.FC<SceneConfigurationProps> = (
  props,
) => {
  const {
    sx,
    onScreenshotClick,
    devicePosition,
    imageSelector,
    cameraOrientation,
    cameraZoom,
    cameraPosition,
    renderQuality,
  } = props;

  return (
    <Stack p={1} spacing={2} component={Paper} sx={sx} divider={<Divider />}>
      {imageSelector?.enabled && (
        <ImagePicker
          onUploadClick={imageSelector.onUploadClick}
          onDeleteClick={imageSelector.onDeleteClick}
          src={imageSelector.imageSrc}
        />
      )}
      {renderQuality?.enabled && (
        <RenderQuality
          value={renderQuality.value}
          onChange={renderQuality.onChange}
        />
      )}
      {cameraOrientation?.enabled && (
        <CameraOrientationSelector
          orientation={cameraOrientation.orientation}
          onChange={cameraOrientation.onChange}
        />
      )}
      {cameraZoom?.enabled && (
        <CameraZoomSlider
          value={cameraZoom.value}
          onChange={cameraZoom.onChange}
        />
      )}
      {cameraPosition?.enabled && (
        <CameraPositionControls onChange={cameraPosition.onChange} />
      )}
      {devicePosition?.enabled && (
        <SceneDeviceControls
          onMove={devicePosition.onMove}
          onRotate={devicePosition.onRotate}
        />
      )}
      <Button onClick={onScreenshotClick} size="large" variant="contained">
        Generate Image
      </Button>
    </Stack>
  );
};
