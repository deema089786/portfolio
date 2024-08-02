import { z } from 'zod';

export const editProfileFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
});
