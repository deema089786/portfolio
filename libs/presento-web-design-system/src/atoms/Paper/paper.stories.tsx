import type { Meta, StoryObj } from '@storybook/react';

import { Paper } from './paper.component';

const meta: Meta<typeof Paper> = {
  component: Paper,
  title: 'Paper',
};
export default meta;
type Story = StoryObj<typeof Paper>;

export const PaperRounded: Story = {
  args: {
    variant: 'round',
    children: 'Paper',
  },
};

export const PaperSquare: Story = {
  args: {
    variant: 'square',
    children: 'Paper',
  },
};
