import type { Meta, StoryObj } from '@storybook/react';

import { Paper } from './paper.component';

const meta: Meta<typeof Paper> = {
  component: Paper,
  title: 'Atoms/Paper',
};
export default meta;
type Story = StoryObj<typeof Paper>;

export const RoundedShadowSmall: Story = {
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
export const RoundedShadowMedium: Story = {
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
export const RoundedShadowLarge: Story = {
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

export const SquareShadowSmall: Story = {
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
export const SquareShadowMedium: Story = {
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
export const SquareShadowLarge: Story = {
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
