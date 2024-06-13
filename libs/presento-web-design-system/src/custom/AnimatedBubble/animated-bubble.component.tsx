import React, { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';

import { AnimatedBubbleProps } from './animated-bubble.types';
const DEFAULT_SIZE = 300 as const;

export const AnimatedBubble: React.FC<
  PropsWithChildren<AnimatedBubbleProps>
> = (props) => {
  const { children, size = DEFAULT_SIZE } = props;
  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .svg-animation': { position: 'absolute' },
      }}
    >
      <svg
        className="svg-animation"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="fill"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientTransform="rotate(130 0.5 0.5)"
          >
            <stop offset="0%" stopColor="#9bc2ff"></stop>
            <stop offset="100%" stopColor="#fddbf0"></stop>
          </linearGradient>
        </defs>
        <path fill="url(#fill)">
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
            M93,64Q89,78,77,87.5Q65,97,50,96Q35,95,24.5,85.5Q14,76,8.5,63Q3,50,7.5,36Q12,22,24,14Q36,6,50.5,4.5Q65,3,76.5,12.5Q88,22,92.5,36Q97,50,93,64Z;
            M93,64.5Q89,79,77,87.5Q65,96,50,95.5Q35,95,23,86.5Q11,78,5.5,64Q0,50,6.5,36.5Q13,23,24,13Q35,3,50,3Q65,3,77.5,12Q90,21,93.5,35.5Q97,50,93,64.5Z;
            M93.5,64Q89,78,77,86.5Q65,95,50,95.5Q35,96,22.5,87.5Q10,79,7,64.5Q4,50,8,36.5Q12,23,23.5,13Q35,3,49.5,5Q64,7,76,14.5Q88,22,93,36Q98,50,93.5,64Z;
            M94,64Q89,78,77,86.5Q65,95,50,96Q35,97,23.5,87Q12,77,6.5,63.5Q1,50,6.5,36.5Q12,23,23.5,14Q35,5,50,4.5Q65,4,77.5,12.5Q90,21,94.5,35.5Q99,50,94,64Z;
            M93,64.5Q90,79,77,86Q64,93,49.5,94.5Q35,96,22.5,87.5Q10,79,7.5,64.5Q5,50,7.5,35.5Q10,21,23,14Q36,7,50.5,5.5Q65,4,77,13Q89,22,92.5,36Q96,50,93,64.5Z;
            M95,64.5Q90,79,77,86Q64,93,49.5,94.5Q35,96,23.5,86.5Q12,77,7,63.5Q2,50,6.5,35.5Q11,21,23,12Q35,3,49.5,4.5Q64,6,75,14.5Q86,23,93,36.5Q100,50,95,64.5Z;
            M92.5,63.5Q87,77,75.5,85.5Q64,94,49.5,94.5Q35,95,22.5,87Q10,79,5,64.5Q0,50,6.5,36.5Q13,23,24,13.5Q35,4,49.5,5.5Q64,7,75.5,15Q87,23,92.5,36.5Q98,50,92.5,63.5Z;
            M93,64Q89,78,77,87.5Q65,97,50,96Q35,95,24.5,85.5Q14,76,8.5,63Q3,50,7.5,36Q12,22,24,14Q36,6,50.5,4.5Q65,3,76.5,12.5Q88,22,92.5,36Q97,50,93,64Z
            "
          ></animate>
        </path>
      </svg>
      {children}
    </Box>
  );
};
