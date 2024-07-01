import { SceneInfo } from './types';
import { SceneV1 } from './scene-v1';

export const SCENES: SceneInfo[] = [
  {
    id: '1',
    previewImageSrc: '/images/sb-story-scene-card-image.png',
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
    previewImageSrc: '/images/sb-story-scene-card-image.png',
    title: 'Single Mobile Device',
    description: 'Pretty render with device on the table and waves',
    tags: [
      { id: '21', label: 'Mobile', color: 'info' },
      { id: '22', label: 'IOS', color: 'warning' },
      { id: '23', label: 'Android', color: 'success' },
    ],
    component: SceneV1,
  },
] as const;
