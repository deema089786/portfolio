import React, { PropsWithChildren } from 'react';
import { styled } from '@pigment-css/react';

import { StackProps } from './stack.types';

const DivStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: `calc(${theme.spacing.unit}px * var(--spacing))`,
  flexDirection: 'var(--direction)',
  alignItems: 'var(--align)',
  justifyContent: 'var(--justify)',
}));

export const Stack: React.FC<PropsWithChildren<StackProps>> = (props) => {
  const {
    children,
    spacing = 1,
    direction = 'column',
    align = 'stretch',
    justify = 'flex-start',
    className,
  } = props;

  return (
    <DivStyled
      className={className}
      style={
        {
          '--spacing': spacing,
          '--direction': direction,
          '--align': align,
          '--justify': justify,
        } as React.CSSProperties
      }
    >
      {children}
    </DivStyled>
  );
};
