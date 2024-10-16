import React from 'react';
import { Grid2 as Grid, Box } from '@mui/material';

import { SectionTitle, SkillItem } from '../../molecules';

export const SkillsSection: React.FC = () => {
  return (
    <Box>
      <SectionTitle>Technologies I use</SectionTitle>
      <Grid container spacing={1}>
        <Grid size={{ xs: 3, md: 3, lg: 'grow' }}>
          <SkillItem type="ts" />
        </Grid>
        <Grid size={{ xs: 3, md: 3, lg: 'grow' }}>
          <SkillItem type="js" />
        </Grid>
        <Grid size={{ xs: 3, md: 3, lg: 'grow' }}>
          <SkillItem type="next" />
        </Grid>
        <Grid size={{ xs: 3, md: 3, lg: 'grow' }}>
          <SkillItem type="node" />
        </Grid>
        <Grid size={{ xs: 3, md: 3, lg: 'grow' }}>
          <SkillItem type="nest" />
        </Grid>
        <Grid size={{ xs: 3, md: 3, lg: 'grow' }}>
          <SkillItem type="mui" />
        </Grid>
        <Grid size={{ xs: 3, md: 3, lg: 'grow' }}>
          <SkillItem type="react" />
        </Grid>
        <Grid size={{ xs: 3, md: 3, lg: 'grow' }}>
          <SkillItem type="capacitor" />
        </Grid>
      </Grid>
    </Box>
  );
};
