import type { Meta, StoryObj } from '@storybook/react';

import { SceneV3 } from './scene-v3.component';

const meta: Meta<typeof SceneV3> = {
  component: SceneV3,
  title: 'Scenes/Scene V3',
};
export default meta;
type Story = StoryObj<typeof SceneV3>;

export const Default: Story = {
  args: {},
};
