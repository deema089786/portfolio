import type { Meta, StoryObj } from '@storybook/react';

import { SceneV5 } from './scene-v5.component';

const meta: Meta<typeof SceneV5> = {
  component: SceneV5,
  title: 'Scenes/Scene V5',
};
export default meta;
type Story = StoryObj<typeof SceneV5>;

export const Default: Story = {
  args: {},
};
