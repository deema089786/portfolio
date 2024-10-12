import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import tsIcon from './assests/ts-icon.png';
import jsIcon from './assests/js-icon.png';
import nextIcon from './assests/next-icon.png';
import nodeIcon from './assests/node-icon.png';
import nestIcon from './assests/nest-icon.png';
import muiIcon from './assests/mui-icon.png';
import reactIcon from './assests/react-icon.png';
import capacitorIcon from './assests/capacitor-icon.png';

type SkillItemType =
  | 'ts'
  | 'js'
  | 'next'
  | 'node'
  | 'nest'
  | 'mui'
  | 'react'
  | 'capacitor';

type SkillItemProps = {
  type: SkillItemType;
};

const skillLabels: Record<SkillItemType, string> = {
  ts: 'TypeScript',
  js: 'JavaScript',
  next: 'Next.JS',
  node: 'Node.JS',
  nest: 'Nest.JS',
  mui: 'Material UI',
  react: 'React.JS',
  capacitor: 'Capacitor',
};

const skillIcons: Record<SkillItemType, string> = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ts: tsIcon.src as string,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  js: jsIcon.src as string,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  next: nextIcon.src as string,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  node: nodeIcon.src as string,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  nest: nestIcon.src as string,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  mui: muiIcon.src as string,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  react: reactIcon.src as string,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  capacitor: capacitorIcon.src as string,
};

const imageSize = 60;

export const SkillItem: React.FC<SkillItemProps> = (props) => {
  const { type } = props;
  return (
    <Paper>
      <Stack
        height={110}
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={skillIcons[type]}
          width={imageSize}
          height={imageSize}
          alt={skillLabels[type]}
        />
        <Typography align="center" variant="caption" fontWeight="bold">
          {skillLabels[type]}
        </Typography>
      </Stack>
    </Paper>
  );
};
