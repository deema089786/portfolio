import { SxProps } from '@mui/material';
import {
  Direction2D,
  Direction3D,
  Orientation,
  RenderQualityValue,
} from '@presento/presento-web-types';

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

  renderQuality?: {
    enabled: boolean;
    value: RenderQualityValue;
    onChange(value: RenderQualityValue): void;
  };

  cameraPosition?: {
    enabled: boolean;
    onChange(direction: Direction2D): void;
  };
};
