import React from 'react';
import { styled } from '@pigment-css/react';

import { TextFieldProps } from './text-field.types';

const InputStyled = styled('input')(({ theme }) => ({
  outline: 'none',
  display: 'inline-block',
  height: theme.spacing.unit * 5,
  verticalAlign: 'middle',
  borderRadius: 500000,
  minWidth: '100px',
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: theme.spacing.unit * 2,
  paddingRight: theme.spacing.unit * 2,

  border: '1px solid transparent',

  '--shadow-color': '0deg 0% 0%',
  boxShadow:
    '0px 0.3px 0.3px hsl(var(--shadow-color) / 0.11), 0px 0.9px 1px -0.9px hsl(var(--shadow-color) / 0.11), 0.1px 2.4px 2.6px -1.8px hsl(var(--shadow-color) / 0.11), 0.2px 5.9px 6.5px -2.7px hsl(var(--shadow-color) / 0.11)',

  '&:hover': {
    borderColor: theme.color.primary.light,
  },
  '&:focus': {
    borderColor: theme.color.primary.dark,
  },
}));

export const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    value,
    onChange,
    placeholder,
    type = 'text',
    name,
    disabled = false,
    maxLength,
    autoFocus = false,
    style,
    className,
  } = props;
  return (
    <InputStyled
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      autoFocus={autoFocus}
      style={style}
      className={className}
    />
  );
};
