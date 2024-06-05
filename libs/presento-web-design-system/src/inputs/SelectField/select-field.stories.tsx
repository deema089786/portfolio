import type { Meta, StoryObj } from '@storybook/react';

import { SelectField } from './select-field.component';

const meta: Meta<typeof SelectField> = {
  component: SelectField,
  title: 'Inputs/Select Field',
};
export default meta;
type Story = StoryObj<typeof SelectField>;

export const Default: Story = {
  args: { placeholder: 'Select Field' },
};
