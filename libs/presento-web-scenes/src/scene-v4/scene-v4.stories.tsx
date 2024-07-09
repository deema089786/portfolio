import type { Meta, StoryObj } from '@storybook/react';

import { SceneV4 } from './scene-v4.component';

const meta: Meta<typeof SceneV4> = {
  component: SceneV4,
  title: 'Scenes/Scene V4',
};
export default meta;
type Story = StoryObj<typeof SceneV4>;

export const Default: Story = {
  args: {},
};
