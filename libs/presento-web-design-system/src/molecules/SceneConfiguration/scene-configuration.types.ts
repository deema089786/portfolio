import { SxProps } from '@mui/material';
import { Direction3D, Orientation } from '@presento/presento-web-types';

export type SceneConfigurationProps = {
  sx?: SxProps;

  onUploadImageClick(): void;
  onDeleteImageClick(): void;
  onScreenshotClick(): void;
  imageSrc: string | null;

  onDeviceMove(direction: Direction3D): void;
  onDeviceRotate(direction: Direction3D): void;

  cameraOrientation: Orientation;
  onCameraOrientationChange?(orientation: Orientation): void;
};
