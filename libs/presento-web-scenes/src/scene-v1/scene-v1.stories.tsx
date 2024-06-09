import type { Meta, StoryObj } from '@storybook/react';

import { SceneV1 } from './scene-v1.component';

const meta: Meta<typeof SceneV1> = {
  component: SceneV1,
  title: 'Scenes/Scene V1',
};
export default meta;
type Story = StoryObj<typeof SceneV1>;

export const Default: Story = {
  args: {},
};
