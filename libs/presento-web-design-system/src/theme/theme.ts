'use client';

// import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

export const theme = createTheme({
  palette: {
    primary: {
      light: '#7212f6',
      main: '#5600cc',
      dark: '#300170',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    // fontFamily: roboto.style.fontFamily,
  },
  spacing: 8,
  shape: {
    borderRadius: 16,
  },
});
