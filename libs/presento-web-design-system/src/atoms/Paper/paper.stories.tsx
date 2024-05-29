import type { Meta, StoryObj } from '@storybook/react';

import { Paper } from './paper.component';

const meta: Meta<typeof Paper> = {
  component: Paper,
  title: 'Atoms/Paper',
};
export default meta;
type Story = StoryObj<typeof Paper>;

export const PaperRoundedShadowSmall: Story = {
  args: {
    variant: 'round',
    shadowSize: 'small',
    children: 'Paper',
  },
  render: (props) => (
    <div style={{ width: 200 }}>
      <Paper {...props} />
    </div>
  ),
};
export const PaperRoundedShadowMedium: Story = {
  args: {
    variant: 'round',
    shadowSize: 'medium',
    children: 'Paper',
  },
  render: (props) => (
    <div style={{ width: 200 }}>
      <Paper {...props} />
    </div>
  ),
};
export const PaperRoundedShadowLarge: Story = {
  args: {
    variant: 'round',
    shadowSize: 'large',
    children: 'Paper',
  },
  render: (props) => (
    <div style={{ width: 200 }}>
      <Paper {...props} />
    </div>
  ),
};

export const PaperSquareShadowSmall: Story = {
  args: {
    variant: 'square',
    shadowSize: 'small',
    children: 'Paper',
  },
  render: (props) => (
    <div style={{ width: 200 }}>
      <Paper {...props} />
    </div>
  ),
};
export const PaperSquareShadowMedium: Story = {
  args: {
    variant: 'square',
    shadowSize: 'medium',
    children: 'Paper',
  },
  render: (props) => (
    <div style={{ width: 200 }}>
      <Paper {...props} />
    </div>
  ),
};
export const PaperSquareShadowLarge: Story = {
  args: {
    variant: 'square',
    shadowSize: 'large',
    children: 'Paper',
  },
  render: (props) => (
    <div style={{ width: 200 }}>
      <Paper {...props} />
    </div>
  ),
};
