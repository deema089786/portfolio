import React, { PropsWithChildren } from 'react';
import { styled } from '@pigment-css/react';

import { TagProps } from './tag.types';

const SHADOW_COLOR = '0deg 0% 0%';

const SpanStyled = styled('span')<{ color: NonNullable<TagProps['color']> }>(
  ({ theme }) => ({
    letterSpacing: 0.1,
    fontSize: '0.8rem',
    fontWeight: 600,
    borderRadius: 50000,
    padding: theme.spacing.unit * 0.25,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    border: '1px solid #00000045',
    variants: [
      {
        props: { color: 'primary' },
        style: {
          color: 'white',
          backgroundColor: theme.color.primary,
        },
      },
      {
        props: { color: 'secondary' },
        style: {
          color: 'black',
          backgroundColor: theme.color.secondary,
        },
      },
      {
        props: { color: 'info' },
        style: {
          color: 'darkblue',
          backgroundColor: 'white',
        },
      },
      {
        props: { color: 'warning' },
        style: {
          color: '#690000',
          backgroundColor: '#ff8f00',
        },
      },
      {
        props: { color: 'success' },
        style: {
          color: 'white',
          backgroundColor: '#03c87b',
        },
      },
    ],
    '--shadow-color': SHADOW_COLOR,
    boxShadow:
      '0px 0.4px 0.4px hsl(var(--shadow-color) / 0.15), 0px 1px 1.1px -0.7px hsl(var(--shadow-color) / 0.14), 0px 2.1px 2.3px -1.4px hsl(var(--shadow-color) / 0.13), 0px 4.5px 4.9px -2.1px hsl(var(--shadow-color) / 0.13), 0.1px 8.9px 9.6px -2.8px hsl(var(--shadow-color) / 0.12)',
  }),
);

export const Tag: React.FC<PropsWithChildren<TagProps>> = (props) => {
  const { children, color = 'primary' } = props;
  return <SpanStyled color={color}>{children}</SpanStyled>;
};
