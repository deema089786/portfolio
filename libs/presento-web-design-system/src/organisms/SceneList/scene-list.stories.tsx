import type { Meta, StoryObj } from '@storybook/react';

import { SceneList } from './scene-list.component';
import { SceneListProps } from './scene-list.types';

const meta: Meta<typeof SceneList> = {
  component: SceneList,
  title: 'Organisms/Scene List',
};
export default meta;
type Story = StoryObj<typeof SceneList>;

const sceneCards: SceneListProps['scenes'] = [
  {
    id: '1',
    imageSrc: '/images/sb-story-scene-card-image.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '1', label: 'Mobile', color: 'info' },
      { id: '2', label: 'IOS', color: 'warning' },
      { id: '3', label: 'Android', color: 'success' },
    ],
  },
  {
    id: '1',
    imageSrc: '/images/sb-story-scene-card-image.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '1', label: 'Mobile', color: 'info' },
      { id: '2', label: 'IOS', color: 'warning' },
      { id: '3', label: 'Android', color: 'success' },
    ],
  },
  {
    id: '1',
    imageSrc: '/images/sb-story-scene-card-image.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '1', label: 'Mobile', color: 'info' },
      { id: '2', label: 'IOS', color: 'warning' },
      { id: '3', label: 'Android', color: 'success' },
    ],
  },
  {
    id: '1',
    imageSrc: '/images/sb-story-scene-card-image.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '1', label: 'Mobile', color: 'info' },
      { id: '2', label: 'IOS', color: 'warning' },
      { id: '3', label: 'Android', color: 'success' },
    ],
  },
  {
    id: '1',
    imageSrc: '/images/sb-story-scene-card-image.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '1', label: 'Mobile', color: 'info' },
      { id: '2', label: 'IOS', color: 'warning' },
      { id: '3', label: 'Android', color: 'success' },
    ],
  },
  {
    id: '1',
    imageSrc: '/images/sb-story-scene-card-image.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '1', label: 'Mobile', color: 'info' },
      { id: '2', label: 'IOS', color: 'warning' },
      { id: '3', label: 'Android', color: 'success' },
    ],
  },
  {
    id: '1',
    imageSrc: '/images/sb-story-scene-card-image.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '1', label: 'Mobile', color: 'info' },
      { id: '2', label: 'IOS', color: 'warning' },
      { id: '3', label: 'Android', color: 'success' },
    ],
  },
  {
    id: '1',
    imageSrc: '/images/sb-story-scene-card-image.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '1', label: 'Mobile', color: 'info' },
      { id: '2', label: 'IOS', color: 'warning' },
      { id: '3', label: 'Android', color: 'success' },
    ],
  },
];

export const Default: Story = {
  args: { scenes: sceneCards },
};
