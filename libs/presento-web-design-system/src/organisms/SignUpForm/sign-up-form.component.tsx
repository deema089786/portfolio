import React from 'react';
import Stack from '@mui/material/Stack';

import { GoogleSignUpButton, Paper } from '../../atoms';
import { Typography } from '../../core';
import { SignUpFormProps } from './sign-up-form.types';

export const SignUpForm: React.FC<SignUpFormProps> = (props) => {
  const { google } = props;
  return (
    <Paper sx={{ maxWidth: 'sm' }}>
      <Stack
        spacing={2}
        px={4}
        py={8}
        alignItems="center"
        justifyContent="center"
      >
        {google?.enabled && (
          <GoogleSignUpButton
            clientId={google.clientId}
            onSuccess={google.onSuccess}
            size="large"
            shape="pill"
            text="signup_with"
          />
        )}
        <Typography paragraph fontWeight="bold" textAlign="center">
          Or
        </Typography>
        <Typography variant="caption" textAlign="center">
          More options will be soon
        </Typography>
      </Stack>
    </Paper>
  );
};
