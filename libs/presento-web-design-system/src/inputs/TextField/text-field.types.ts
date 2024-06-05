import React from 'react';

import { InputFieldIconPropsPlacement } from '../../atoms/InputFieldIcon';

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
  icon?: string;
  iconPlacement?: InputFieldIconPropsPlacement;
};
