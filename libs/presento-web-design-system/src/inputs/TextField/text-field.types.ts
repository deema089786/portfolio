import React from 'react';

export type TextFieldProps = {
  value: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  maxLength?: number;
  autoFocus?: boolean;
  style?: React.CSSProperties;
  className?: string;
};
