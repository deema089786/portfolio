import React, { PropsWithChildren } from 'react';
import { styled } from '@pigment-css/react';

import { TypographyProps } from './typography.types';

const StyledP = styled('p')<{
  variant: NonNullable<TypographyProps['variant']>;
  gutterBottom: NonNullable<TypographyProps['gutterBottom']>;
}>({
  variants: [
    {
      props: { variant: 'h1' },
      style: {
        fontSize: '6rem',
        fontWeight: 300,
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
      },
    },
    {
      props: { variant: 'h2' },
      style: {
        fontSize: '3.75rem',
        fontWeight: 300,
        lineHeight: 1.2,
        letterSpacing: '-0.00833em',
      },
    },
    {
      props: { variant: 'h3' },
      style: {
        fontSize: '3rem',
        fontWeight: 400,
        lineHeight: 1.167,
        letterSpacing: '0em',
      },
    },
    {
      props: { variant: 'subtitle1' },
      style: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.75,
        letterSpacing: '0.00938em',
      },
    },
    {
      props: { variant: 'subtitle2' },
      style: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57,
        letterSpacing: '0.00714em',
      },
    },
    {
      props: { variant: 'body1' },
      style: {
        fontSize: '1rem',
        fontWeight: 300,
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
      },
    },
    {
      props: { variant: 'body2' },
      style: {
        fontSize: '0.875rem',
        fontWeight: 300,
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
      },
    },
    {
      props: { variant: 'caption' },
      style: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.66,
        letterSpacing: '0.03333em',
      },
    },
    {
      props: { gutterBottom: true },
      style: {
        marginBottom: '0.35em',
      },
    },
  ],
});

export const Typography: React.FC<PropsWithChildren<TypographyProps>> = (
  props,
) => {
  const {
    variant = 'body1',
    component = 'p',
    gutterBottom = false,
    children,
    className,
  } = props;
  return (
    <StyledP
      as={component}
      variant={variant}
      gutterBottom={gutterBottom}
      className={className}
    >
      {children}
    </StyledP>
  );
};
