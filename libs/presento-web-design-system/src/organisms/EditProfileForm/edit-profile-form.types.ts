import { z } from 'zod';

import { editProfileFormSchema } from './edit-profile-form.validation';

export type EditProfileFormValues = z.infer<typeof editProfileFormSchema>;

export type EditProfileFormProps = {
  initialValues?: Partial<EditProfileFormValues>;
};
