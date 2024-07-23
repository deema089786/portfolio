import React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import LowIcon from '@mui/icons-material/OneK';
import MediumIcon from '@mui/icons-material/TwoK';
import HighIcon from '@mui/icons-material/ThreeK';
import UltraIcon from '@mui/icons-material/FourK';
import { RenderQualityValue } from '@presento/presento-web-types';

import { Button } from '../../../../atoms';

type RenderQualityProps = {
  value: RenderQualityValue;
  onChange?: (value: RenderQualityValue) => void;
};

export const RenderQuality: React.FC<RenderQualityProps> = (props) => {
  const { value, onChange } = props;
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={0.5}
    >
      <Badge badgeContent={<LowIcon fontSize="small" color="primary" />}>
        <Button
          size="small"
          fullWidth
          variant={value === 'low' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => onChange?.('low')}
        >
          Low
        </Button>
      </Badge>
      <Badge badgeContent={<MediumIcon fontSize="small" color="primary" />}>
        <Button
          size="small"
          fullWidth
          variant={value === 'medium' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => onChange?.('medium')}
        >
          Medium
        </Button>
      </Badge>
      <Badge badgeContent={<HighIcon fontSize="small" color="primary" />}>
        <Button
          size="small"
          fullWidth
          variant={value === 'high' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => onChange?.('high')}
        >
          High
        </Button>
      </Badge>
      <Badge badgeContent={<UltraIcon fontSize="small" color="primary" />}>
        <Button
          size="small"
          fullWidth
          variant={value === 'ultra' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => onChange?.('ultra')}
        >
          Ultra
        </Button>
      </Badge>
    </Stack>
  );
};
