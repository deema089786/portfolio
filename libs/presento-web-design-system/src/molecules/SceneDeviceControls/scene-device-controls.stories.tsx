import type { Meta, StoryObj } from '@storybook/react';

import { SceneDeviceControls } from './scene-device-controls.component';

const meta: Meta<typeof SceneDeviceControls> = {
  component: SceneDeviceControls,
  title: 'Molecules/Scene Device Controls',
};
export default meta;
type Story = StoryObj<typeof SceneDeviceControls>;

export const Default: Story = {
  args: {
    onMove: (direction) => undefined,
    onRotate: (direction) => undefined,
  },
  render: (props) => (
    <div style={{ width: 300 }}>
      <SceneDeviceControls {...props} />
    </div>
  ),
};
