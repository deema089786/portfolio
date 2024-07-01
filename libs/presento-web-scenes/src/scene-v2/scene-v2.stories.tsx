import type { Meta, StoryObj } from '@storybook/react';

import { SceneV2 } from './scene-v2.component';

const meta: Meta<typeof SceneV2> = {
  component: SceneV2,
  title: 'Scenes/Scene V2',
};
export default meta;
type Story = StoryObj<typeof SceneV2>;

export const Default: Story = {
  args: {},
};
