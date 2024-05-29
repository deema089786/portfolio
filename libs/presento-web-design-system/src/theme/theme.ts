import { string } from 'three/examples/jsm/nodes/shadernode/ShaderNode';

export type Theme = {
  color: {
    primary: string;
    secondary: string;
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
