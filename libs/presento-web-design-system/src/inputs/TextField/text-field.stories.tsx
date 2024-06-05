import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './text-field.component';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Inputs/Text Field',
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: { placeholder: 'Text Field' },
};

export const WithIconRight: Story = {
  args: { placeholder: 'Text Field', icon: 'R', iconPlacement: 'right' },
};
export const WithIconLeft: Story = {
  args: { placeholder: 'Text Field', icon: 'L', iconPlacement: 'left' },
};
