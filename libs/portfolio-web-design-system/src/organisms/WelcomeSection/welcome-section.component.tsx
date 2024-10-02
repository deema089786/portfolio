import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { WavingHand as ContactMeIcon } from '@mui/icons-material';

import portraitImage from './assests/portrait.png';

export const WelcomeSection: React.FC = () => {
  return (
    <Stack
      sx={{
        pt: 8,
        // backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        backgroundImage: `url(${portraitImage.src})`,

        backgroundSize: '250px',
        height: '350px',
        '@media only screen and (min-width: 640px)': {
          backgroundSize: '450px',
        },
        '@media only screen and (min-width: 768px)': {
          backgroundSize: '650px',
        },
        '@media only screen and (min-width: 1024px)': {
          backgroundSize: '750px',
        },
        '@media only screen and (min-width: 1280px)': {
          backgroundSize: '850px',
        },
      }}
    >
      <Stack
        flex={1}
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography
          component="h1"
          variant="h3"
          color="textPrimary"
          sx={{ pl: 1 }}
        >
          Hello 👋
          <br />
          I'm Dmytro&nbsp;Kotielevskyi
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="textPrimary"
          sx={{ pl: 1 }}
        >
          Full-Stack TypeScript Software Engineer
        </Typography>
        <Button
          size="large"
          variant="outlined"
          color="primary"
          endIcon={<ContactMeIcon />}
        >
          Contact Me
        </Button>
      </Stack>
    </Stack>
  );
};
