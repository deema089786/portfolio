'use client';

import React from 'react';
import { Box, Stack, IconButton } from '@mui/material';
import {
  ArrowForward as NextSlideIcon,
  ArrowBack as PreSlideIcon,
} from '@mui/icons-material';
import useEmblaCarousel from 'embla-carousel-react';
import './portfolio-section.styles.css';

import { PortfolioProjectSlide, SectionTitle } from '../../molecules';
import { projectSlides } from './portfolio-section.constants';

export const PortfolioSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <SectionTitle>Examples of my work</SectionTitle>
        <Stack direction="row" spacing={1}>
          <IconButton
            size="small"
            onClick={() => emblaApi?.scrollPrev()}
            // disabled={!emblaApi?.canScrollPrev()}
          >
            <PreSlideIcon />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => emblaApi?.scrollNext()}
            // disabled={!emblaApi?.canScrollNext()}
          >
            <NextSlideIcon />
          </IconButton>
        </Stack>
      </Stack>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {projectSlides.map((slide) => (
            <div className="embla__slide">
              <PortfolioProjectSlide
                key={slide.name}
                name={slide.name}
                description={slide.description}
                imageSrc={slide.imageSrc}
                githubUrl={slide.githubUrl}
                projectUrl={slide.projectUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};
