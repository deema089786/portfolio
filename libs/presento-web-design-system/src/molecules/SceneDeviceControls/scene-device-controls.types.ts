import { Direction3D } from '@presento/presento-web-types';

export type SceneDeviceControlsProps = {
  onMove(direction: Direction3D): void;
  onRotate(direction: Direction3D): void;
};
