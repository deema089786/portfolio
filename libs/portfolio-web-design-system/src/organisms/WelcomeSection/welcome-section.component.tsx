import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { WavingHand as ContactMeIcon } from '@mui/icons-material';

import portraitImage from './assests/portrait.png';

export const WelcomeSection: React.FC = () => {
  return (
    <Stack
      sx={{
        height: '350px',
        pt: 10,
        // backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
        backgroundSize: '850px',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        backgroundImage: `url(${portraitImage.src})`,
      }}
    >
      <Stack
        flex={1}
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography component="h1" variant="h3" color="textPrimary">
          Hello 👋
          <br />
          I'm Dmytro&nbsp;Kotielevskyi
        </Typography>
        <Typography component="h2" variant="h5" color="textPrimary">
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
