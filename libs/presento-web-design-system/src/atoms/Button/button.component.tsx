import React, { PropsWithChildren } from 'react';
import { styled } from '@pigment-css/react';

import { ButtonProps } from './button.types';

const ButtonStyled = styled('button')<{
  size?: ButtonProps['size'];
  color?: ButtonProps['color'];
}>(({ theme }) => ({
  border: 'none',
  padding: '0.75rem',
  // ...other base styles
  variants: [
    {
      props: { size: 'large' },
      style: { padding: '1rem' },
    },
    {
      props: { size: 'medium' },
      style: { padding: '0.8rem' },
    },
    {
      props: { size: 'small' },
      style: { padding: '0.5rem' },
    },
    {
      props: { color: 'primary' },
      style: { background: theme.color.primary },
    },
    {
      props: { color: 'secondary' },
      style: { background: theme.color.secondary },
    },
  ],
}));

export const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { children, className, color, size } = props;
  return (
    <ButtonStyled className={className} color={color} size={size}>
      {children}
    </ButtonStyled>
  );
};
