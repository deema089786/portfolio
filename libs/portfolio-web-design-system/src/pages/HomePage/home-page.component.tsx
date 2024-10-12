import React from 'react';
import { Stack } from '@mui/material';

import { ScreenLayout } from '../../layout';
import {
  PortfolioSection,
  ServicesSection,
  SkillsSection,
  WelcomeSection,
} from '../../organisms';

export const HomePage: React.FC = () => {
  return (
    <ScreenLayout>
      <Stack spacing={4}>
        <WelcomeSection />
        <SkillsSection />
        <PortfolioSection />
        <ServicesSection />
      </Stack>
    </ScreenLayout>
  );
};
