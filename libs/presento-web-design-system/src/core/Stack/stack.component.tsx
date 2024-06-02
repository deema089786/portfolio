import React, { PropsWithChildren } from 'react';
import { styled } from '@pigment-css/react';

import { StackProps } from './stack.types';

type DivStyledProps = {
  spacing: NonNullable<StackProps['spacing']>;
  direction: NonNullable<StackProps['direction']>;
  align: NonNullable<StackProps['align']>;
  justify: NonNullable<StackProps['justify']>;
};

const DivStyled = styled('div')<DivStyledProps>(({ theme }) => ({
  '--spacing': (props: DivStyledProps) => props.spacing,
  '--direction': (props: DivStyledProps) => props.direction,
  '--align': (props: DivStyledProps) => props.align,
  '--justify': (props: DivStyledProps) => props.justify,
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
      spacing={spacing}
      direction={direction}
      align={align}
      justify={justify}
      className={className}
    >
      {children}
    </DivStyled>
  );
};
