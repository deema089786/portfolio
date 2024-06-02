import type { Meta, StoryObj } from '@storybook/react';

import { SceneCard } from './scene-card.component';

const meta: Meta<typeof SceneCard> = {
  component: SceneCard,
  title: 'Molecules/Scene Card',
};
export default meta;
type Story = StoryObj<typeof SceneCard>;

export const Default: Story = {
  args: {
    imageSrc: '/images/sb-story-scene-card-image.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '1', label: 'Mobile', color: 'info' },
      { id: '2', label: 'IOS', color: 'warning' },
      { id: '3', label: 'Android', color: 'success' },
    ],
  },
  render: (props) => (
    <div style={{ width: 350 }}>
      <SceneCard {...props} />
    </div>
  ),
};
