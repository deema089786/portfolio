import type { Meta, StoryObj } from '@storybook/react';

import { SceneConfiguration } from './scene-configuration.component';

const meta: Meta<typeof SceneConfiguration> = {
  component: SceneConfiguration,
  title: 'Molecules/Scene Configuration',
};
export default meta;
type Story = StoryObj<typeof SceneConfiguration>;

export const Default: Story = {
  args: {
    test: '',
  },
  render: (props) => (
    <div style={{ width: 400 }}>
      <SceneConfiguration {...props} />
    </div>
  ),
};
