import React, { PropsWithChildren } from 'react';
import { styled } from '@pigment-css/react';

import { PaperProps } from './paper.types';

const shadowColor = '0deg 0% 63%';
const DivStyled = styled('div')<{
  variant: NonNullable<PaperProps['variant']>;
}>(({ theme }) => ({
  boxShadow: `0.3px 0.5px 0.6px hsl(${shadowColor} / 0.38), 0.8px 1.6px 2px -0.9px hsl(${shadowColor} / 0.37), 2px 4.1px 5px -1.8px hsl(${shadowColor} / 0.36), 5px 10px 12.3px -2.7px hsl(${shadowColor} / 0.35);`,
  padding: theme.spacing.unit * 2,
  variants: [
    {
      props: { variant: 'round' },
      style: { borderRadius: theme.spacing.unit * 2 },
    },
    { props: { variant: 'square' }, style: { borderRadius: 0 } },
  ],
}));

export const Paper: React.FC<PropsWithChildren<PaperProps>> = (props) => {
  const { children, variant = 'round' } = props;
  return <DivStyled variant={variant}>{children}</DivStyled>;
};
