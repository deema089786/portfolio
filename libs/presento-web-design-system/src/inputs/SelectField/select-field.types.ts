import React from 'react';

export type SelectFieldProps = {
  value: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
};
