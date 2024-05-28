import type { StorybookConfig } from '@storybook/react-vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { pigment } from '@pigment-css/vite-plugin';
import { mergeConfig } from 'vite';

import { defaultTheme } from '../src';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../src/**/*.docs.mdx'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [
        nxViteTsPaths(),
        pigment({
          theme: defaultTheme,
        }),
      ],
    }),
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
