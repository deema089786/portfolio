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
    onScreenshotClick: () => undefined,
    imageSelector: {
      enabled: true,
      imageSrc: null,
      onUploadClick: () => undefined,
      onDeleteClick: () => undefined,
    },

    devicePosition: {
      enabled: true,
      onMove: () => undefined,
      onRotate: () => undefined,
    },

    cameraOrientation: {
      enabled: true,
      orientation: 'horizontal',
      onChange: () => undefined,
    },

    cameraZoom: {
      enabled: true,
      value: 1.5,
      onChange: () => undefined,
    },
  },
  render: (props) => (
    <div style={{ width: 350 }}>
      <SceneConfiguration {...props} />
    </div>
  ),
};
