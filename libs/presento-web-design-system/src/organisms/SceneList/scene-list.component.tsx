import React, { useMemo } from 'react';
import Box from '@mui/material/Box';

import { SceneCard } from '../../molecules';
import { SceneListProps } from './scene-list.types';

export const SceneList: React.FC<SceneListProps> = (props) => {
  const { scenes } = props;
  const sceneCards = useMemo(
    () =>
      scenes.map(({ id, ...sceneCardProps }) => (
        <SceneCard key={id} {...sceneCardProps} />
      )),
    [scenes],
  );
  return (
    <Box
      sx={(theme) => ({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        gap: theme.spacing(1),
        gridTemplateAreas: `
  ". . ."
  ". . ."
  ". . ."
  `,
      })}
    >
      {sceneCards}
    </Box>
  );
};
