import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from 'next/link';

import { SceneCardProps } from './scene-card.types';
import { Paper, Tag } from '../../atoms';
import { Typography } from '../../core';

export const SceneCard: React.FC<SceneCardProps> = (props) => {
  const { imageSrc, title, description, tags, href } = props;
  return (
    <Link href={href || '#'}>
      <Paper
        sx={{
          position: 'relative',
          '&:hover': {
            cursor: 'pointer',
            '& .scene-card-image': {
              backgroundSize: '115%',
              transition: '300ms',
            },
          },
        }}
      >
        <Box
          className="scene-card-image"
          sx={{
            backgroundSize: '105%',
            backgroundPosition: 'center',
            backgroundImage: `url(${imageSrc})`,
            transition: '1000ms',
            height: 140,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
        <Stack p={2} spacing={0.5}>
          <Typography variant="subtitle1" component="p">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            // top: theme.spacing(0.5),
            // right: theme.spacing(0.5),
          }}
        >
          {tags.map((tag) => (
            <Tag key={tag.id} color={tag.color}>
              {tag.label}
            </Tag>
          ))}
        </Stack>
      </Paper>
    </Link>
  );
};
