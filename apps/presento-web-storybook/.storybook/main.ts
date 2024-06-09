import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.docs.mdx',
    '../../../libs/presento-web-design-system/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../libs/presento-web-design-system/src/**/*.docs.mdx',
    '../../../libs/presento-web-scenes/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../libs/presento-web-scenes/src/**/*.docs.mdx',
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-themes'],
  staticDirs: ['../static'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
};

export default config;
