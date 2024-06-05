import type { Meta, StoryObj } from '@storybook/react';

import { InputFieldIcon } from './input-field-icon.component';

const meta: Meta<typeof InputFieldIcon> = {
  component: InputFieldIcon,
  title: 'Atoms/Input Field Icon',
};
export default meta;
type Story = StoryObj<typeof InputFieldIcon>;

export const Default: Story = {
  args: {},
};
