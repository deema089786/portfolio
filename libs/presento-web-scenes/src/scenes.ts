import { SceneInfo } from './types';
import { SceneV1 } from './scene-v1';
import { SceneV2 } from './scene-v2';
import { SceneV3 } from './scene-v3';
import { SceneV4 } from './scene-v4';
import { SceneV5 } from './scene-v5';

export const SCENES: SceneInfo[] = [
  {
    id: '1',
    previewImageSrc: '/images/scene-previews/scene-v1.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '11', label: 'Mobile', color: 'info' },
      { id: '12', label: 'IOS', color: 'warning' },
      { id: '13', label: 'Android', color: 'success' },
    ],
    component: SceneV1,
  },
  {
    id: '2',
    previewImageSrc: '/images/scene-previews/scene-v2.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '21', label: 'Mobile', color: 'info' },
      { id: '22', label: 'IOS', color: 'warning' },
      { id: '23', label: 'Android', color: 'success' },
    ],
    component: SceneV2,
  },
  {
    id: '3',
    previewImageSrc: '/images/scene-previews/scene-v3.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '21', label: 'Mobile', color: 'info' },
      { id: '22', label: 'IOS', color: 'warning' },
      { id: '23', label: 'Android', color: 'success' },
    ],
    component: SceneV3,
  },
  {
    id: '4',
    previewImageSrc: '/images/scene-previews/scene-v4.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '21', label: 'Mobile', color: 'info' },
      { id: '22', label: 'IOS', color: 'warning' },
      { id: '23', label: 'Android', color: 'success' },
    ],
    component: SceneV4,
  },
  {
    id: '5',
    previewImageSrc: '/images/scene-previews/scene-v5.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '21', label: 'Mobile', color: 'info' },
      { id: '22', label: 'IOS', color: 'warning' },
      { id: '23', label: 'Android', color: 'success' },
    ],
    component: SceneV5,
  },
] as const;
