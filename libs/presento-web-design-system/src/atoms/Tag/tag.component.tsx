import React, { PropsWithChildren } from 'react';

import { TagProps, TagPropsColor } from './tag.types';
import { Paper } from '../Paper';

const colors: Record<TagPropsColor, { text: string; background: string }> = {
  primary: {
    text: 'white',
    background: 'black',
  },
  secondary: {
    text: 'white',
    background: 'black',
  },
  info: {
    text: 'darkblue',
    background: 'white',
  },
  warning: {
    text: '#690000',
    background: '#ff8f00',
  },
  success: {
    text: 'white',
    background: '#03c87b',
  },
};

export const Tag: React.FC<PropsWithChildren<TagProps>> = (props) => {
  const { children, color = 'primary' } = props;
  return (
    <Paper
      sx={(theme) => {
        const textColor = colors[color].text;
        const backgroundColor = colors[color].background;
        return {
          color: textColor,
          backgroundColor: backgroundColor,
          letterSpacing: 0.1,
          fontSize: '0.8rem',
          fontWeight: 600,
          borderRadius: 50000,
          padding: theme.spacing(0.25),
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1),
          border: '1px solid #00000045',
        };
      }}
    >
      {children}
    </Paper>
  );
};
