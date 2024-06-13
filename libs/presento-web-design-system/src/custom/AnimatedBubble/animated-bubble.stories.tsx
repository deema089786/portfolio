import type { Meta, StoryObj } from '@storybook/react';

import { AnimatedBubble } from './animated-bubble.component';
import { Button } from '../../atoms';

const meta: Meta<typeof AnimatedBubble> = {
  component: AnimatedBubble,
  title: 'Custom/Animated Bubble',
};
export default meta;
type Story = StoryObj<typeof AnimatedBubble>;

export const Default: Story = {
  args: {
    children: (
      <Button sx={{ background: 'white' }} variant="outlined" size="large">
        Explore the catalog
      </Button>
    ),
    size: 300,
  },
};
