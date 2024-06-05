import React, { PropsWithChildren } from 'react';
import { styled } from '@pigment-css/react';

import { ButtonProps } from './button.types';

const ButtonStyled = styled('button')<{
  size?: ButtonProps['size'];
  color?: ButtonProps['color'];
}>(({ theme }) => ({
  // border: 'none',
  // padding: '0.75rem',
  alignItems: 'center',
  backgroundColor: '#fff',

  boxSizing: 'border-box',
  color: '#121212',
  cursor: 'pointer',
  display: 'inline-flex',
  flex: '1 1 auto',
  fontFamily: 'Inter, sans-serif',
  fontSize: '1rem',
  fontWeight: '600',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  textAlign: 'center',
  textDecoration: 'none',

  whiteSpace: 'nowrap',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',

  border: '1px solid transparent',
  borderRadius: 50000,

  transition: 'all .2s',

  '--shadow-color': '0deg 0% 0%',
  boxShadow:
    '0px 0.3px 0.3px hsl(var(--shadow-color) / 0.11), 0px 0.9px 1px -0.9px hsl(var(--shadow-color) / 0.11), 0.1px 2.4px 2.6px -1.8px hsl(var(--shadow-color) / 0.11), 0.2px 5.9px 6.5px -2.7px hsl(var(--shadow-color) / 0.11)',

  '&:hover': {
    boxShadow:
      '0px 0.3px 0.4px hsl(var(--shadow-color) / 0.05), 0px 1.2px 1.6px -0.3px hsl(var(--shadow-color) / 0.08), 0.1px 2.7px 3.6px -0.7px hsl(var(--shadow-color) / 0.11), 0.2px 5.9px 7.9px -1px hsl(var(--shadow-color) / 0.14)',
  },
  // ...other base styles
  variants: [
    {
      props: { size: 'large' },
      style: {
        fontSize: '1.2rem',
        paddingTop: theme.spacing.unit * 0.8,
        paddingBottom: theme.spacing.unit * 0.8,
        paddingLeft: theme.spacing.unit * 1.4,
        paddingRight: theme.spacing.unit * 1.4,
      },
    },
    {
      props: { size: 'medium' },
      style: {
        fontSize: '1rem',
        paddingTop: theme.spacing.unit * 0.6,
        paddingBottom: theme.spacing.unit * 0.6,
        paddingLeft: theme.spacing.unit * 1.2,
        paddingRight: theme.spacing.unit * 1.2,
      },
    },
    {
      props: { size: 'small' },
      style: {
        fontSize: '0.8rem',
        paddingTop: theme.spacing.unit * 0.4,
        paddingBottom: theme.spacing.unit * 0.4,
        paddingLeft: theme.spacing.unit * 1,
        paddingRight: theme.spacing.unit * 1,
      },
    },
    {
      props: { color: 'primary' },
      style: {
        backgroundColor: `hsl(from ${theme.color.primary.main} h s l / 10%)`,
        color: theme.color.primary.buttonText,
        '&:hover': {
          backgroundColor: `hsl(from ${theme.color.primary.main} h s l / 15%)`,
          borderColor: theme.color.primary.buttonText,
        },
      },
    },
    {
      props: { color: 'secondary' },
      style: {
        backgroundColor: `hsl(from ${theme.color.secondary.main} h s l / 10%)`,
        color: theme.color.secondary.buttonText,
        '&:hover': {
          backgroundColor: `hsl(from ${theme.color.secondary.main} h s l / 15%)`,
          borderColor: theme.color.secondary.buttonText,
        },
      },
    },
  ],
}));

export const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { children, className, color = 'primary', size = 'medium' } = props;
  return (
    <ButtonStyled role="button" className={className} color={color} size={size}>
      {children}
    </ButtonStyled>
  );
};
