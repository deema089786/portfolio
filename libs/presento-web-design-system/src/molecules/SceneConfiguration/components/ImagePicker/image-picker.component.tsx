import React from 'react';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Box from '@mui/material/Box';

import UPLOAD_BUTTON_IMAGE from './assets/upload-button-image.svg';
import { Button } from '../../../../atoms';
import { Typography } from '../../../../core';

const IMAGE_PICKER_ITEM_SIZE_PX = 120 as const;
const UPLOAD_BUTTON_IMAGE_SIZE_PX = 80 as const;

type ImagePickerUploadButtonProps = {
  onClick(): void;
};

const ImagePickerUploadButton: React.FC<ImagePickerUploadButtonProps> = (
  props,
) => {
  const { onClick } = props;
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alightItems: 'center',
        justifyContent: 'center',
        width: IMAGE_PICKER_ITEM_SIZE_PX,
        height: IMAGE_PICKER_ITEM_SIZE_PX,
        borderRadius: '12px',
      }}
    >
      <Image
        src={UPLOAD_BUTTON_IMAGE}
        alt="Upload image"
        width={UPLOAD_BUTTON_IMAGE_SIZE_PX}
        height={UPLOAD_BUTTON_IMAGE_SIZE_PX}
      />
      <Typography fontSize={11} fontWeight="bold">
        Upload image
      </Typography>
    </Button>
  );
};

type ImagePickerItemPreviewProps = {
  src: string;
  onDeleteClick(): void;
};
const ImagePickerItemPreview: React.FC<ImagePickerItemPreviewProps> = (
  props,
) => {
  const { src, onDeleteClick } = props;
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alightItems: 'center',
        justifyContent: 'center',
        p: 1,
        width: IMAGE_PICKER_ITEM_SIZE_PX,
        height: IMAGE_PICKER_ITEM_SIZE_PX,
        // overflow: 'hidden',
        border: '1px solid',
        borderRadius: '8px',
        borderColor: 'primary.main',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        '& .overlay': {
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          background: 'white',
          opacity: 0,
          borderRadius: '8px',
        },
        '&:hover .overlay': {
          opacity: 0.9,
        },
        '& .delete-button': {
          display: 'none',
        },
        '&:hover .delete-button': {
          display: 'block',
        },
      }}
    >
      <Box className="overlay"></Box>
      <Button
        onClick={onDeleteClick}
        className="delete-button"
        variant="outlined"
      >
        Delete
      </Button>
    </Box>
  );
};

type ImagePickerProps = {
  onUploadClick(): void;
  onDeleteClick(): void;
  src: string | null;
};

export const ImagePicker: React.FC<ImagePickerProps> = (props) => {
  const { onUploadClick, onDeleteClick, src } = props;
  return (
    <Stack direction="row" spacing={1}>
      <ImagePickerUploadButton onClick={onUploadClick} />
      {src && (
        <ImagePickerItemPreview src={src} onDeleteClick={onDeleteClick} />
      )}
    </Stack>
  );
};
