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
