export type SceneCameraControlDirection = 'up' | 'down' | 'left' | 'right';

export type SceneCameraControlsProps = {
  onMove(direction: SceneCameraControlDirection): void;
  onRotate(direction: SceneCameraControlDirection): void;
};
