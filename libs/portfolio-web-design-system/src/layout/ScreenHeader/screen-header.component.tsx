import React from 'react';
import { Stack, Container, Button, Typography } from '@mui/material';
import SignInIcon from '@mui/icons-material/PermIdentity';
import Image from 'next/image';
import Link from 'next/link';

import Logo from './assets/logo.png';

const SCREEN_HEADER_HEIGHT = 48;

export const ScreenHeader: React.FC = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Stack
        direction="row"
        spacing="1"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: SCREEN_HEADER_HEIGHT }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          component={Link}
          href="/"
        >
          <Image src={Logo} alt="DK Software" width={32} height={32} />
          <Typography color="primary" variant="caption" fontWeight="bold">
            Dmytro Kotielevskyi
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button size="small" variant="outlined" endIcon={<SignInIcon />}>
            Contact Me
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
