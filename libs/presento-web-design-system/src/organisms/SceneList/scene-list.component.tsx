import React, { useMemo } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import { SceneCard } from '../../molecules';
import { SceneListProps } from './scene-list.types';

export const SceneList: React.FC<SceneListProps> = (props) => {
  const { scenes } = props;
  const sceneCards = useMemo(
    () =>
      scenes.map(({ id, ...sceneCardProps }) => (
        <Grid key={id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <SceneCard href={`/catalog/${id}`} {...sceneCardProps} />
        </Grid>
      )),
    [scenes],
  );
  return (
    <Grid container spacing={2} sx={{ mx: '-8px !important' }}>
      {sceneCards}
    </Grid>
  );
};
