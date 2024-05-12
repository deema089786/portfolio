import type { ExtendTheme } from '@pigment-css/react/theme';

import { Theme } from './theme';

declare module '@pigment-css/react/theme' {
  type ThemeTokens = Theme;

  interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: 'light' | 'dark';
      tokens: ThemeTokens;
    }>;
  }
}
