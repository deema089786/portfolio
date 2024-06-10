import React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Image from 'next/image';
import SignInIcon from '@mui/icons-material/PermIdentity';
import Link from 'next/link';

import { ScreenHeaderProps } from './screen-header.types';
import LOGO from './assets/logo.svg';
import { Button } from '../../atoms';

const SCREEN_HEADER_HEIGHT = 48;
const LOGO_HEIGHT = 32;
const LOGO_WIDTH = 100;

export const ScreenHeader: React.FC<ScreenHeaderProps> = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Stack
        direction="row"
        spacing="1"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: SCREEN_HEADER_HEIGHT }}
      >
        <Link href="/">
          <Image
            src={LOGO}
            alt="Presento Logo"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
          />
        </Link>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button size="small" component={Link} href="/catalog">
            Catalog
          </Button>
          <Button size="small" component={Link} href="/home">
            About us
          </Button>
          <Button size="small" component={Link} href="/home">
            Guide
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button size="small" variant="outlined" endIcon={<SignInIcon />}>
            Sign In
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
