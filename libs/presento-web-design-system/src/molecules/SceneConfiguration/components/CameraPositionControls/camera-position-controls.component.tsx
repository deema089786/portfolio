import React from 'react';
import { Direction2D } from '@presento/presento-web-types';
import Stack from '@mui/material/Stack';
import ArrowLeftIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowForward';
import ArrowUpIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';

import { Button } from '../../../../atoms';

type CameraPositionControlsProps = {
  onChange(direction: Direction2D): void;
};

export const CameraPositionControls: React.FC<CameraPositionControlsProps> = (
  props,
) => {
  const { onChange } = props;

  return (
    <Stack direction="row" spacing={1} justifyContent="space-between">
      <Button
        variant="outlined"
        onClick={() => onChange('-x')}
        startIcon={<ArrowLeftIcon />}
      >
        Left
      </Button>
      <Button
        variant="outlined"
        onClick={() => onChange('+x')}
        endIcon={<ArrowRightIcon />}
      >
        Right
      </Button>
      <Button
        variant="outlined"
        onClick={() => onChange('+y')}
        startIcon={<ArrowUpIcon />}
      >
        Up
      </Button>
      <Button
        variant="outlined"
        onClick={() => onChange('-y')}
        startIcon={<ArrowDownIcon />}
      >
        Down
      </Button>
    </Stack>
  );
};
