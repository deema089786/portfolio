import type { Meta, StoryObj } from '@storybook/react';

import { SceneCameraControls } from './scene-camera-controls.component';
import { SceneCameraControlDirection } from './scene-camera-controls.types';

const meta: Meta<typeof SceneCameraControls> = {
  component: SceneCameraControls,
  title: 'Molecules/Scene Camera Controls',
};
export default meta;
type Story = StoryObj<typeof SceneCameraControls>;

export const Default: Story = {
  args: {
    onMove: (direction) => undefined,
    onRotate: (direction) => undefined,
  },
  render: (props) => (
    <div style={{ width: 300 }}>
      <SceneCameraControls {...props} />
    </div>
  ),
};
