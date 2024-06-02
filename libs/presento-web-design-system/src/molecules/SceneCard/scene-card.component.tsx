import React from 'react';
import { styled } from '@pigment-css/react';

import { SceneCardProps } from './scene-card.types';
import { Paper } from '../../atoms';
import { Stack } from '../../core';
import { Typography } from '../../core/Typography/typography.component';
import { Tag } from '../../atoms/Tag/tag.component';

const SceneCardImage = styled('div')(({ theme }) => ({
  backgroundSize: '100%',
  backgroundPosition: 'center',
  transition: '1000ms',
  height: 140,
  borderTopLeftRadius: theme.spacing.unit * 2,
  borderTopRightRadius: theme.spacing.unit * 2,
}));

const PaperStyled = styled(Paper)({
  position: 'relative',
  '&:hover': {
    cursor: 'pointer',
    [`& ${SceneCardImage}`]: {
      backgroundSize: '105%',
      transition: '300ms',
    },
  },
});

const SceneCardContent = styled(Stack)(({ theme }) => ({
  padding: theme.spacing.unit * 2,
}));

const SceneCardTagContainer = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing.unit * 0.5,
  right: theme.spacing.unit * 0.5,
}));

export const SceneCard: React.FC<SceneCardProps> = (props) => {
  const { imageSrc, title, description, tags } = props;
  return (
    <PaperStyled noPaddings>
      <SceneCardImage style={{ backgroundImage: `url(${imageSrc})` }} />
      <SceneCardContent spacing={0.5}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </SceneCardContent>
      <SceneCardTagContainer direction="row">
        {tags.map((tag) => (
          <Tag key={tag.id} color={tag.color}>
            {tag.label}
          </Tag>
        ))}
      </SceneCardTagContainer>
    </PaperStyled>
  );
};
