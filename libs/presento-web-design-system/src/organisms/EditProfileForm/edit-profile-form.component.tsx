'use client';

import React, { useMemo } from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { AccountCircle as NoProfileImageIcon } from '@mui/icons-material';
import { useFormik } from '@presento/utils';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import {
  useUpdateProfile,
  useUser,
} from '@presento/presento-web-modules/user/client';

import { Button, Paper } from '../../atoms';
import {
  EditProfileFormProps,
  EditProfileFormValues,
} from './edit-profile-form.types';
import { TextField } from '../../inputs';
import { defaultEditProfileFormValues } from './edit-profile-form.constants';
import { editProfileFormSchema } from './edit-profile-form.validation';

const PROFILE_IMAGE_SIZE = 120;
const MAX_COMPONENT_WIDTH = 400;

export const EditProfileForm: React.FC<EditProfileFormProps> = (props) => {
  const { user } = useUser();
  const { updateProfile, isError, isLoading } = useUpdateProfile();

  const initialValues: Partial<EditProfileFormValues> = useMemo(() => {
    if (!user) return {};
    return { firstName: user.firstName, lastName: user.lastName };
  }, [user]);

  const { register, handleSubmit, dirty, resetForm } =
    useFormik<EditProfileFormValues>({
      validationSchema: toFormikValidationSchema(editProfileFormSchema),
      enableReinitialize: true,
      initialValues: {
        ...defaultEditProfileFormValues,
        ...initialValues,
      },
      onSubmit: (values) =>
        updateProfile({
          firstName: values.firstName,
          lastName: values.lastName,
        }),
    });

  if (!user) return <div>loading ...</div>;

  return (
    <Stack
      component={Paper}
      sx={{ maxWidth: MAX_COMPONENT_WIDTH }}
      spacing={4}
      p={2}
    >
      <Avatar
        src={user.image}
        sx={{
          alignSelf: 'center',
          width: PROFILE_IMAGE_SIZE,
          height: PROFILE_IMAGE_SIZE,
        }}
      >
        {!user.image && <NoProfileImageIcon />}
      </Avatar>
      <Stack spacing={2} component="form" onSubmit={handleSubmit}>
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
        <Button type="submit" variant="contained" disabled={isLoading}>
          Save
        </Button>
        <Button
          variant="outlined"
          disabled={!dirty || isLoading}
          onClick={() => resetForm()}
        >
          Cancel
        </Button>
      </Stack>
    </Stack>
  );
};
