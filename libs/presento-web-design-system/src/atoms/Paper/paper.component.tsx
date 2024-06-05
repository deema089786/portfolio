import React, { PropsWithChildren } from 'react';
import { styled } from '@pigment-css/react';

import { PaperProps } from './paper.types';

const SHADOW_COLOR = '0deg 0% 0%';

const DivStyled = styled('div')<{
  variant: NonNullable<PaperProps['variant']>;
  noPaddings: NonNullable<PaperProps['noPaddings']>;
  shadowSize: NonNullable<PaperProps['shadowSize']>;
}>(({ theme }) => ({
  padding: theme.spacing.unit * 2,
  backgroundColor: 'white',
  variants: [
    {
      props: { variant: 'round' },
      style: { borderRadius: theme.spacing.unit * 2 },
    },
    { props: { variant: 'square' }, style: { borderRadius: 0 } },
    { props: { noPaddings: true }, style: { padding: 0 } },
    {
      props: { shadowSize: 'small' },
      style: {
        boxShadow:
          '0px 0.6px 0.6px hsl(var(--shadow-color) / 0.18), 0px 1.2px 1.3px -1.4px hsl(var(--shadow-color) / 0.16), 0px 3.2px 3.5px -2.8px hsl(var(--shadow-color) / 0.15)',
      },
    },
    {
      props: { shadowSize: 'medium' },
      style: {
        boxShadow:
          '0px 0.4px 0.4px hsl(var(--shadow-color) / 0.15), 0px 1px 1.1px -0.7px hsl(var(--shadow-color) / 0.14), 0px 2.1px 2.3px -1.4px hsl(var(--shadow-color) / 0.13), 0px 4.5px 4.9px -2.1px hsl(var(--shadow-color) / 0.13), 0.1px 8.9px 9.6px -2.8px hsl(var(--shadow-color) / 0.12)',
      },
    },
    {
      props: { shadowSize: 'large' },
      style: {
        boxShadow:
          '0px 0.3px 0.3px hsl(var(--shadow-color) / 0.11), 0.1px 1.3px 1.4px -0.3px hsl(var(--shadow-color) / 0.11), 0.1px 2.3px 2.5px -0.6px hsl(var(--shadow-color) / 0.11), 0.2px 3.6px 3.9px -0.9px hsl(var(--shadow-color) / 0.1), 0.3px 5.4px 5.8px -1.2px hsl(var(--shadow-color) / 0.1), 0.5px 8px 8.7px -1.6px hsl(var(--shadow-color) / 0.1), 0.7px 11.5px 12.4px -1.9px hsl(var(--shadow-color) / 0.1), 0.9px 16.3px 17.6px -2.2px hsl(var(--shadow-color) / 0.09), 1.3px 22.7px 24.6px -2.5px hsl(var(--shadow-color) / 0.09), 1.8px 30.7px 33.2px -2.8px hsl(var(--shadow-color) / 0.09)',
      },
    },
  ],
}));

export const Paper: React.FC<PropsWithChildren<PaperProps>> = (props) => {
  const {
    children,
    className,
    variant = 'round',
    shadowSize = 'medium',
    noPaddings = false,
    style,
  } = props;

  return (
    <DivStyled
      className={className}
      variant={variant}
      noPaddings={noPaddings}
      shadowSize={shadowSize}
      style={
        { '--shadow-color': SHADOW_COLOR, ...style } as React.CSSProperties
      }
    >
      {children}
    </DivStyled>
  );
};
