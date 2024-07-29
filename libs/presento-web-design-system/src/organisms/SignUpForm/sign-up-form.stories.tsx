import type { Meta, StoryObj } from '@storybook/react';

import { SignUpForm } from './sign-up-form.component';

const meta: Meta<typeof SignUpForm> = {
  component: SignUpForm,
  title: 'Organisms/Sign Up Form',
};
export default meta;
type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {
  args: {
    google: {
      enabled: true,
      clientId:
        '1045100024636-omlr1d4ulc7lvrv5k6m697c2d3850322.apps.googleusercontent.com',
    },
  },
};
