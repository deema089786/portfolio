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
