import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import { services } from './services-section.constants';

export const ServicesSection: React.FC = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h2"
        color="textPrimary"
        gutterBottom
        sx={{ pl: 1 }}
      >
        Services I provide
      </Typography>
      {services.map((service) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography>{service.icon}</Typography>
              <Typography>{service.title}</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{service.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
