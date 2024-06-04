export type Theme = {
  color: {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrast: string;
      buttonText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrast: string;
      buttonText: string;
    };
  };
  spacing: {
    unit: number;
  };
  typography: {
    fontFamily: string;
  };
};

export type ThemeSpacingUnitProp = string | number;

export type ThemeSpacingProps = {
  p?: number | string;
  pt?: number | string;
  pb?: number | string;
  pl?: number | string;
  pr?: number | string;
  m?: number | string;
  mt?: number | string;
  mb?: number | string;
  ml?: number | string;
  mr?: number | string;
};

export const defaultTheme: Theme = {
  color: {
    primary: {
      main: '#001d3d',
      light: '#003566',
      dark: '#000814',
      contrast: '#B0CCE9',
      buttonText: 'hsl(209, 100%, 11%)',
    },
    secondary: {
      main: '#ffc300',
      light: '#ffd60a',
      dark: '#F79E04',
      contrast: '#4F2600',
      buttonText: 'hsl(29, 100%, 15%)',
    },
  },
  spacing: {
    unit: 8,
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
};
