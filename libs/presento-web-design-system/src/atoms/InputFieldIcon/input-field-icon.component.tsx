import { styled } from '@pigment-css/react';
import React from 'react';

import { InputFieldIconProps } from './input-field-icon.types';

const InputFieldIconContainer = styled('span')<{
  placement: NonNullable<InputFieldIconProps['placement']>;
}>(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing.unit * 0.5,
  bottom: 0,
  right: theme.spacing.unit * 0.5,
  height: theme.spacing.unit * 4,
  width: theme.spacing.unit * 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: '1px solid transparent',
  borderRadius: '50%',
  borderColor: theme.color.primary.light,

  variants: [
    {
      props: { placement: 'right' },
      style: { right: theme.spacing.unit * 0.5 },
    },
    {
      props: { placement: 'left' },
      style: { left: theme.spacing.unit * 0.5 },
    },
  ],
}));

export const InputFieldIcon: React.FC<InputFieldIconProps> = (props) => {
  const { placement = 'right', icon } = props;
  return (
    <InputFieldIconContainer placement={placement}>
      {icon}
    </InputFieldIconContainer>
  );
};
