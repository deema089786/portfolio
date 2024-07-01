import { SxProps } from '@mui/material';
import { Direction3D, Orientation } from '@presento/presento-web-types';

export type SceneConfigurationProps = {
  sx?: SxProps;
  onScreenshotClick(): void;

  imageSelector?: {
    enabled: boolean;
    imageSrc: string | null;
    onUploadClick(): void;
    onDeleteClick(): void;
  };

  devicePosition?: {
    enabled: boolean;
    onMove(direction: Direction3D): void;
    onRotate(direction: Direction3D): void;
  };

  cameraOrientation?: {
    enabled: boolean;
    orientation: Orientation;
    onChange(orientation: Orientation): void;
  };

  cameraZoom?: {
    enabled: boolean;
    value: number;
    onChange(value: number): void;
  };
};
