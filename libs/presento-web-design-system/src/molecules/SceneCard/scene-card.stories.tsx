import type { Meta, StoryObj } from '@storybook/react';

import { SceneCard } from './scene-card.component';

const meta: Meta<typeof SceneCard> = {
  component: SceneCard,
  title: 'Molecules/Scene Card',
};
export default meta;
type Story = StoryObj<typeof SceneCard>;

export const SceneCardBase: Story = {
  args: {
    imageSrc: '/images/sb-story-scene-card-image.png',
    title: 'test',
    description: 'test',
    tags: [],
  },
  render: (props) => (
    <div style={{ width: 350 }}>
      <SceneCard {...props} />
    </div>
  ),
};
