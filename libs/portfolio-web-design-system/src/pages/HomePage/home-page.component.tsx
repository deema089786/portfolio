import React from 'react';
import { Stack } from '@mui/material';

import { ScreenLayout } from '../../layout';
import {
  ServicesSection,
  SkillsSection,
  WelcomeSection,
} from '../../organisms';

export const HomePage: React.FC = () => {
  return (
    <ScreenLayout>
      <Stack spacing={3}>
        <WelcomeSection />
        <SkillsSection />
        <ServicesSection />
      </Stack>
    </ScreenLayout>
  );
};
