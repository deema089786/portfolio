import React from 'react';

import { Breadcrumbs, SceneList } from '@presento/presento-web-design-system';

const sceneCards: any = [
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

const CatalogPage: React.FC = () => {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Catalog' }]} />
      <SceneList scenes={sceneCards} />
    </>
  );
};

export default CatalogPage;
