import { useCallback, useState } from 'react';
import { Direction3D } from '@presento/presento-web-types';

import {
  DEVICE_INITIAL_POSITION,
  DEVICE_INITIAL_ROTATION,
} from '../scene-v1/scene-v1.constants';

const MOVE_SIZE = 0.05;
const ROTATE_SIZE = 0.05;

export type DevicePositionControls = {
  position: [number, number, number];
  rotation: [number, number, number];
  move: (direction: Direction3D) => void;
  rotate: (direction: Direction3D) => void;
};

export const useDevicePositionControls = (): DevicePositionControls => {
  const [position, setPosition] = useState<[number, number, number]>(
    DEVICE_INITIAL_POSITION,
  );
  const [rotation, setRotation] = useState(DEVICE_INITIAL_ROTATION);

  const move = useCallback(
    (direction: Direction3D) => {
      const newPosition: [number, number, number] = [...position];
      if (direction === '+x') newPosition[0] += MOVE_SIZE;
      if (direction === '-x') newPosition[0] -= MOVE_SIZE;
      if (direction === '+y') newPosition[1] += MOVE_SIZE;
      if (direction === '-y') newPosition[1] -= MOVE_SIZE;
      if (direction === '+z') newPosition[2] += MOVE_SIZE;
      if (direction === '-z') newPosition[2] -= MOVE_SIZE;

      setPosition(newPosition);
    },
    [position],
  );

  const rotate = useCallback(
    (direction: Direction3D) => {
      const newRotation: [number, number, number] = [...rotation];
      if (direction === '+x') newRotation[0] += ROTATE_SIZE;
      if (direction === '-x') newRotation[0] -= ROTATE_SIZE;
      if (direction === '+y') newRotation[1] += ROTATE_SIZE;
      if (direction === '-y') newRotation[1] -= ROTATE_SIZE;
      if (direction === '+z') newRotation[2] += ROTATE_SIZE;
      if (direction === '-z') newRotation[2] -= ROTATE_SIZE;

      setRotation(newRotation);
    },
    [rotation],
  );

  return { position, rotation, move, rotate };
};
