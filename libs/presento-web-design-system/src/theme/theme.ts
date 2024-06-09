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
      light: '#757ce8',
      main: '#204f1b',
      dark: '#002884',
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
