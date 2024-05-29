import React from 'react';
import { styled } from '@pigment-css/react';

import { SceneCardProps } from './scene-card.types';
import { Paper } from '../../atoms';
import { Stack } from '../../core';
import { Typography } from '../../core/Typography/typography.component';

const SceneCardImage = styled('img')(({ theme }) => ({
  height: 140,
  width: '100%',
  borderTopLeftRadius: theme.spacing.unit * 2,
  borderTopRightRadius: theme.spacing.unit * 2,
}));

export const SceneCard: React.FC<SceneCardProps> = (props) => {
  const { imageSrc, title, description, tags } = props;
  return (
    <Paper noPaddings>
      <Stack>
        <SceneCardImage src={imageSrc} />
        <Typography variant="body">{title}</Typography>
        <Typography variant="body">{description}</Typography>
      </Stack>
    </Paper>
  );
};
