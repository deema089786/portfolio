import React from 'react';
import { styled } from '@pigment-css/react';

import { TextFieldProps } from './text-field.types';

const InputStyled = styled('input')(({ theme }) => ({
  border: 'none',
  outline: 'none',
  display: 'inline-block',
  height: '34px',
  verticalAlign: 'middle',
  position: 'relative',
  bottom: '14px',
  right: '9px',
  borderRadius: '22px',
  width: '220px',
  boxSizing: 'border-box',
  padding: '0 18px',

  '--shadow-color': '0deg 0% 0%',
  boxShadow:
    '0px 0.3px 0.3px hsl(var(--shadow-color) / 0.11), 0px 0.9px 1px -0.9px hsl(var(--shadow-color) / 0.11), 0.1px 2.4px 2.6px -1.8px hsl(var(--shadow-color) / 0.11), 0.2px 5.9px 6.5px -2.7px hsl(var(--shadow-color) / 0.11)',
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
