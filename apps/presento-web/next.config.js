//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withPigment, extendTheme } = require('@pigment-css/nextjs-plugin');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  transpilePackages: ['three'],
};

/**
 * @type {import('@presento/presento-web-design-system').Theme}
 **/
const theme = {
  color: {
    primary: 'tomato',
    secondary: 'cyan',
  },
  spacing: {
    unit: 8,
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  (/** @type {import("next").NextConfig} */ c) =>
    withPigment(c, {
      theme: extendTheme({
        cssVarPrefix: 'pigment',
        ...theme,
      }),
    }),
];

module.exports = composePlugins(...plugins)(nextConfig);
