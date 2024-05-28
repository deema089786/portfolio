import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button.component';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    size: 'medium',
    children: 'Button',
  },
};
