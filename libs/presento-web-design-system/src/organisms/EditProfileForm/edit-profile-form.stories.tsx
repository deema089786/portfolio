import type { Meta, StoryObj } from '@storybook/react';

import { EditProfileForm } from './edit-profile-form.component';

const meta: Meta<typeof EditProfileForm> = {
  component: EditProfileForm,
  title: 'Organisms/Edit Profile Form',
};
export default meta;
type Story = StoryObj<typeof EditProfileForm>;

export const Default: Story = {
  args: {},
};
