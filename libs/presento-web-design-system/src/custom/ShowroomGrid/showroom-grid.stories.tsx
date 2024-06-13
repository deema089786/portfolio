import type { Meta, StoryObj } from '@storybook/react';

import { ShowroomGrid } from './showroom-grid.component';

const meta: Meta<typeof ShowroomGrid> = {
  component: ShowroomGrid,
  title: 'Custom/Showroom Grid',
};
export default meta;
type Story = StoryObj<typeof ShowroomGrid>;

export const Default: Story = {
  args: {},
};
