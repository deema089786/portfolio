import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button.component';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const PrimarySmall: Story = {
  args: {
    color: 'primary',
    size: 'small',
    children: 'Button',
  },
};
export const PrimaryMedium: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    children: 'Button',
  },
};
export const PrimaryLarge: Story = {
  args: {
    color: 'primary',
    size: 'large',
    children: 'Button',
  },
};

export const SecondarySmall: Story = {
  args: {
    color: 'secondary',
    size: 'small',
    children: 'Button',
  },
};
export const SecondaryMedium: Story = {
  args: {
    color: 'secondary',
    size: 'medium',
    children: 'Button',
  },
};
export const SecondaryLarge: Story = {
  args: {
    color: 'secondary',
    size: 'large',
    children: 'Button',
  },
};
