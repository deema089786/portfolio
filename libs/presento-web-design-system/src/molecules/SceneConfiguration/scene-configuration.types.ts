import { SxProps } from '@mui/material';

export type SceneConfigurationProps = {
  sx?: SxProps;

  onUploadImageClick(): void;
  onDeleteImageClick(): void;
  onScreenshotClick(): void;
  imageSrc: string | null;
};
