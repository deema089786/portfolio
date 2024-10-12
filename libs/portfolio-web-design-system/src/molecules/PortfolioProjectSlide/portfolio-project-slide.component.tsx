import React from 'react';
import { Paper, Stack, Typography, Box, Button } from '@mui/material';
import {
  GitHub as GitHubIcon,
  ArrowForward as ProjectDetailsIcon,
} from '@mui/icons-material';
import Image from 'next/image';

export type PortfolioProjectSlideProps = {
  name: string;
  description: string;
  imageSrc: string;
  githubUrl: string;
  projectUrl: string;
};

export const PortfolioProjectSlide: React.FC<PortfolioProjectSlideProps> = (
  props: PortfolioProjectSlideProps,
) => {
  const { name, description, imageSrc } = props;
  return (
    <Stack
      component={Paper}
      direction="row"
      justifyContent="space-between"
      overflow="hidden"
    >
      <Stack justifyContent="space-between" p={1}>
        <Box>
          <Typography component="h3" variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography>{description}</Typography>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          <Button startIcon={<GitHubIcon />} variant="outlined">
            Source code
          </Button>
          <Button endIcon={<ProjectDetailsIcon />} variant="outlined">
            Learn more
          </Button>
        </Stack>
      </Stack>
      <Image
        key={imageSrc}
        src={imageSrc}
        alt={name}
        height={360}
        width={480}
      />
    </Stack>
  );
};
