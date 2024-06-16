import { SxProps } from '@mui/material';

import { SceneCameraControlDirection } from '../SceneCameraControls/scene-camera-controls.types';

export type SceneConfigurationProps = {
  sx?: SxProps;

  onUploadImageClick(): void;
  onDeleteImageClick(): void;
  onScreenshotClick(): void;
  imageSrc: string | null;

  onCameraMove(direction: SceneCameraControlDirection): void;
  onCameraRotate(direction: SceneCameraControlDirection): void;
};
