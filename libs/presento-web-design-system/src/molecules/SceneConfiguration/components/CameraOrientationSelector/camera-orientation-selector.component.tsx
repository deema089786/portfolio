import React from 'react';
import { Orientation } from '@presento/presento-web-types';
import Stack from '@mui/material/Stack';
import HorizontalIcon from '@mui/icons-material/PanoramaHorizontal';
import VerticalIcon from '@mui/icons-material/PanoramaVertical';

import { Button } from '../../../../atoms';

type CameraOrientationSelectorProps = {
  orientation: Orientation;
  onChange?: (orientation: Orientation) => void;
};

export const CameraOrientationSelector: React.FC<
  CameraOrientationSelectorProps
> = (props) => {
  const { orientation, onChange } = props;
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button
        fullWidth
        variant={orientation === 'horizontal' ? 'contained' : 'outlined'}
        color="primary"
        onClick={() => onChange?.('horizontal')}
        startIcon={<HorizontalIcon />}
      >
        Horizontal
      </Button>
      <Button
        fullWidth
        variant={orientation === 'vertical' ? 'contained' : 'outlined'}
        color="primary"
        onClick={() => onChange?.('vertical')}
        startIcon={<VerticalIcon />}
      >
        Vertical
      </Button>
    </Stack>
  );
};
