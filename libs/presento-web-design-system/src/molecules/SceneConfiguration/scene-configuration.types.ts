import { TagPropsColor } from '../../atoms/Tag';

export type SceneCardPropsTag = {
  id: string;
  label: string;
  color: TagPropsColor;
};

export type SceneCardPropsTags = SceneCardPropsTag[];

export type SceneCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  tags: SceneCardPropsTags;
};
