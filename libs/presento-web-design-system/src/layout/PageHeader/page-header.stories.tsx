import type { Meta, StoryObj } from '@storybook/react';

import { PageHeader } from './page-header.component';

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
  title: 'Layout/Page Header',
};
export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: { title: 'Primary Title' },
};

export const WithDescription: Story = {
  args: { title: 'Primary Title', description: 'Secondary description' },
};
