import * as path from 'path';
import { StorybookConfig } from '@storybook/nextjs';
import { extendTheme } from '@pigment-css/nextjs-plugin';
import { webpack as webpackPlugin } from '@pigment-css/unplugin';

import { defaultTheme } from '../src';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../src/**/*.docs.mdx'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: ['../static'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpack: (config) => {
    config.module?.rules?.unshift({
      enforce: 'pre',
      test: (filename: string) => filename.endsWith('zero-virtual.css'),
      use: require.resolve('./loader'),
    });
    config.plugins?.push(
      webpackPlugin({
        theme: extendTheme({
          cssVarPrefix: 'pigment',
          ...defaultTheme,
        }),
        // ...rest,
        meta: {
          type: 'next',
          dev: true,
          isServer: false,
          outputCss: true,
          // placeholderCssFile: path.resolve(__dirname, './styles.css'),
          placeholderCssFile: path.resolve(__dirname, './zero-virtual.css'),
          projectPath: path.resolve(__dirname, '.'),
        },
        async asyncResolve(what: string, importer: string, stack: string[]) {
          // Using the same stub file as "next/font". Should be updated in future to
          // use it's own stub depdending on the actual usage.
          if (what.startsWith('__barrel_optimize__')) {
            return require.resolve('../next-font');
          }
          // Need to point to the react from node_modules during eval time.
          // Otherwise, next makes it point to its own version of react that
          // has a lot of RSC specific logic which is not actually needed.
          if (
            what.startsWith('@babel') ||
            what.startsWith('react') ||
            what.startsWith('next')
          ) {
            return require.resolve(what);
          }
          if (what === 'next/image') {
            return require.resolve('../next-image');
          }
          if (what.startsWith('next/font')) {
            return require.resolve('../next-font');
          }
          if (
            what.startsWith('@emotion/styled') ||
            what.startsWith('styled-components')
          ) {
            return require.resolve('../third-party-styled');
          }
          // if (asyncResolve) {
          //   return asyncResolve(what, importer, stack);
          // }
          return null;
        },
        babelOptions: {
          // ...babelOptions,
          // presets: [...(babelOptions?.presets ?? []), 'next/babel'],
          presets: ['next/babel'],
        },
      }),
    );
    config.ignoreWarnings = config.ignoreWarnings ?? [];
    config.ignoreWarnings.push({
      module: /(zero-virtual\.css)|(react\/styles\.css)/,
    });
    return config;
  },
  features: {
    experimentalRSC: true,
  },
};

export default config;
