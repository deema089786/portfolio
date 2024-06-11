import type { Meta, StoryObj } from '@storybook/react';

import { AnimatedBubble } from './animated-bubble.component';

const meta: Meta<typeof AnimatedBubble> = {
  component: AnimatedBubble,
  title: 'Custom/Animated Bubble',
};
export default meta;
type Story = StoryObj<typeof AnimatedBubble>;

export const Default: Story = {
  args: {
    children: 'AnimatedBubble',
  },
};
