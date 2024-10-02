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
  ts: tsIcon.src as string,
  js: jsIcon.src as string,
  next: nextIcon.src as string,
  node: nodeIcon.src as string,
  nest: nestIcon.src as string,
  mui: muiIcon.src as string,
  react: reactIcon.src as string,
  capacitor: capacitorIcon.src as string,
};

export const SkillItem: React.FC<SkillItemProps> = (props) => {
  const { type } = props;
  return (
    <Paper>
      <Stack
        height={140}
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={skillIcons[type]}
          width={60}
          height={60}
          alt={skillLabels[type]}
        />
        <Typography align="center" fontWeight="bold">
          {skillLabels[type]}
        </Typography>
      </Stack>
    </Paper>
  );
};
