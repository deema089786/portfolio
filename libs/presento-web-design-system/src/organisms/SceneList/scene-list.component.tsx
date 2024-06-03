import React, { useMemo } from 'react';
import { styled } from '@pigment-css/react';

import { SceneCard } from '../../molecules';
import { SceneListProps } from './scene-list.types';

const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr',
  gap: theme.spacing.unit * 1,
  gridTemplateAreas: `
  ". . ."
  ". . ."
  ". . ."
  `,
}));

export const SceneList: React.FC<SceneListProps> = (props) => {
  const { scenes } = props;
  const sceneCards = useMemo(
    () =>
      scenes.map(({ id, ...sceneCardProps }) => (
        <SceneCard key={id} {...sceneCardProps} />
      )),
    [scenes],
  );
  return <Container>{sceneCards}</Container>;
};
