'use client';

import React from 'react';
import Stack from '@mui/material/Stack';
import { useFormik } from '@presento/utils';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { Button, Paper } from '../../atoms';
import {
  EditProfileFormProps,
  EditProfileFormValues,
} from './edit-profile-form.types';
import { TextField } from '../../inputs';
import { defaultEditProfileFormValues } from './edit-profile-form.constants';
import { editProfileFormSchema } from './edit-profile-form.validation';

export const EditProfileForm: React.FC<EditProfileFormProps> = (props) => {
  const { initialValues } = props;
  const { register, handleSubmit } = useFormik<EditProfileFormValues>({
    validationSchema: toFormikValidationSchema(editProfileFormSchema),
    initialValues: {
      ...defaultEditProfileFormValues,
      ...initialValues,
    },
    onSubmit: async (values) => {
      // Do something with form data
      console.log(values);
    },
  });

  return (
    <Paper sx={{ maxWidth: 'sm' }}>
      <Stack spacing={2} p={3} component="form" onSubmit={handleSubmit}>
        <TextField
          {...register('firstName')}
          label="First Name"
          placeholder="Enter your first name"
          variant="outlined"
        />
        <TextField
          {...register('lastName')}
          label="Last Name"
          placeholder="Enter your last name"
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          Save
        </Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </Paper>
  );
};
