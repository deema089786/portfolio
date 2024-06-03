import { SceneCardProps } from '../../molecules/SceneCard/scene-card.types';

export type SceneListProps = {
  scenes: ({ id: string } & SceneCardProps)[];
};
