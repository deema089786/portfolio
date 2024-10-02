import './global.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import { darkTheme } from '@portfolio-web-design-system';

export const metadata = {
  title: "Hello 👋 I'm Dmytro Kotielevskyi",
  description:
    'I’m a passionate software developer specializing in building scalable, high-performance web applications. With expertise in TypeScript, Next.js, and React, I focus on delivering robust front-end experiences, combining efficiency with exceptional user interfaces.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#333333' }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
