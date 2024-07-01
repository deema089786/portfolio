import React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

type CameraZoomSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

export const CameraZoomSlider: React.FC<CameraZoomSliderProps> = (props) => {
  const { value, onChange } = props;
  return (
    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
      <ZoomOutIcon color="primary" />
      <Slider
        min={0.5}
        max={2}
        step={0.05}
        value={value}
        onChange={(e, v) => onChange(v as number)}
      />
      <ZoomInIcon color="primary" />
    </Stack>
  );
};
