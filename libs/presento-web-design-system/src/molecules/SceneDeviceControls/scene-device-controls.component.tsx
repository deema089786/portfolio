import React, { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ArrowUpIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';
import ArrowLeftIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowForward';
import RotateRightIcon from '@mui/icons-material/Redo';
import RotateLeftIcon from '@mui/icons-material/Undo';
import { SxProps } from '@mui/material';

import { Button } from '../../atoms';
import { SceneDeviceControlsProps } from './scene-device-controls.types';
import { Typography } from '../../core';

const CONTROL_GROUP_SIZE = 76;
const CONTROL_BUTTON_SIZE = 30;

type ButtonPosition = 'top' | 'bottom' | 'left' | 'right';

type ControlButtonProps = {
  position: ButtonPosition;
  onClick?(): void;
};

const ControlButtonPositionStyles: Record<ButtonPosition, SxProps> = {
  top: {
    left: `calc(50% - ${CONTROL_BUTTON_SIZE / 2}px)`,
    top: 0,
  },
  bottom: {
    left: `calc(50% - ${CONTROL_BUTTON_SIZE / 2}px)`,
    bottom: 0,
  },
  left: { left: 0, top: `calc(50% - ${CONTROL_BUTTON_SIZE / 2}px)` },
  right: {
    right: 0,
    top: `calc(50% - ${CONTROL_BUTTON_SIZE / 2}px)`,
  },
};

const ControlButton: React.FC<PropsWithChildren<ControlButtonProps>> = (
  props,
) => {
  const { position, onClick, children } = props;
  const sx = ControlButtonPositionStyles[position];
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{
        padding: 'initial',
        minWidth: 'initial',
        width: CONTROL_BUTTON_SIZE,
        height: CONTROL_BUTTON_SIZE,
        position: 'absolute',
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export const SceneDeviceControls: React.FC<SceneDeviceControlsProps> = (
  props,
) => {
  const { onMove, onRotate } = props;
  return (
    <Stack direction="row" justifyContent="space-around">
      <Stack spacing={0.5}>
        <Box
          sx={{
            position: 'relative',
            width: CONTROL_GROUP_SIZE,
            height: CONTROL_GROUP_SIZE,
          }}
        >
          <ControlButton position="top" onClick={() => onMove('+y')}>
            <ArrowUpIcon />
          </ControlButton>
          <ControlButton position="bottom" onClick={() => onMove('-y')}>
            <ArrowDownIcon />
          </ControlButton>
          <ControlButton position="left" onClick={() => onMove('-x')}>
            <ArrowLeftIcon />
          </ControlButton>
          <ControlButton position="right" onClick={() => onMove('+x')}>
            <ArrowRightIcon />
          </ControlButton>
        </Box>
        <Typography variant="caption" fontWeight="bold">
          Move device
        </Typography>
      </Stack>
      <Stack spacing={0.5}>
        <Box
          sx={{
            position: 'relative',
            width: CONTROL_GROUP_SIZE,
            height: CONTROL_GROUP_SIZE,
          }}
        >
          <ControlButton position="top" onClick={() => onMove('-z')}>
            <ArrowUpIcon />
          </ControlButton>
          <ControlButton position="bottom" onClick={() => onMove('+z')}>
            <ArrowDownIcon />
          </ControlButton>
        </Box>
        <Typography variant="caption" fontWeight="bold">
          Move device
        </Typography>
      </Stack>

      <Stack spacing={0.5}>
        <Box
          sx={{
            position: 'relative',
            width: CONTROL_GROUP_SIZE,
            height: CONTROL_GROUP_SIZE,
          }}
        >
          <ControlButton position="top" onClick={() => onRotate('-x')}>
            <RotateLeftIcon sx={{ transform: 'rotate(90deg)' }} />
          </ControlButton>
          <ControlButton position="bottom" onClick={() => onRotate('+x')}>
            <RotateLeftIcon sx={{ transform: 'rotate(-90deg)' }} />
          </ControlButton>
          <ControlButton position="left" onClick={() => onRotate('-y')}>
            <RotateLeftIcon />
          </ControlButton>
          <ControlButton position="right" onClick={() => onRotate('+y')}>
            <RotateRightIcon />
          </ControlButton>
        </Box>
        <Typography variant="caption" fontWeight="bold">
          Rotate device
        </Typography>
      </Stack>

      <Stack spacing={0.5}>
        <Box
          sx={{
            position: 'relative',
            width: CONTROL_GROUP_SIZE,
            height: CONTROL_GROUP_SIZE,
          }}
        >
          <ControlButton position="left" onClick={() => onRotate('-z')}>
            <RotateRightIcon sx={{ transform: 'rotate(-90deg)' }} />
          </ControlButton>
          <ControlButton position="right" onClick={() => onRotate('+z')}>
            <RotateLeftIcon sx={{ transform: 'rotate(90deg)' }} />
          </ControlButton>
        </Box>
        <Typography variant="caption" fontWeight="bold">
          Rotate device
        </Typography>
      </Stack>
    </Stack>
  );
};
