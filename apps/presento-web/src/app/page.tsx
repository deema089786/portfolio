import { Stack } from '@mui/material';

import {
  AnimatedBubble,
  Typography,
} from '@presento/presento-web-design-system';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <Stack>
      <Typography component="h1" variant="h2" textAlign="center">
        Create{' '}
        <Typography
          component="span"
          fontSize="inherit"
          color="primary.main"
          className="tracking-in-expand"
        >
          Realistic
        </Typography>{' '}
        Presentations
      </Typography>
      <Typography component="p" variant="subtitle1" textAlign="center">
        With Presento, you can easily create stunning presentations that look
        and feel like the real thing.
      </Typography>
      <AnimatedBubble />
    </Stack>
  );
}
