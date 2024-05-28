import React, { PropsWithChildren } from 'react';
import { styled } from '@pigment-css/react';

const DivStyled = styled('div')({});

export const Paper: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <DivStyled>{children}</DivStyled>;
};
