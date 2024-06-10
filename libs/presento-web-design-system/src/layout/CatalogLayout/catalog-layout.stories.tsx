import type { Meta, StoryObj } from '@storybook/react';

import { CatalogLayout } from './catalog-layout.component';

const meta: Meta<typeof CatalogLayout> = {
  component: CatalogLayout,
  title: 'Layout/Catalog Layout',
};
export default meta;
type Story = StoryObj<typeof CatalogLayout>;

export const Default: Story = {
  args: {},
};
