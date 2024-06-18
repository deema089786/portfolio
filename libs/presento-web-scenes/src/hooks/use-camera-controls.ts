import { useCallback, useState } from 'react';

import {
  CAMERA_INITIAL_POSITION,
  CAMERA_INITIAL_ROTATION,
} from '../scene-v1/scene-v1.constants';

const MOVE_SIZE = 0.1;
const ROTATE_SIZE = 0.1;

export const useCameraControls = () => {
  const [position, setPosition] = useState<[number, number, number]>(
    CAMERA_INITIAL_POSITION,
  );
  const [rotation, setRotation] = useState(CAMERA_INITIAL_ROTATION);

  const move = useCallback(
    (direction: 'up' | 'down' | 'left' | 'right') => {
      const newPosition: [number, number, number] = [...position];
      if (direction === 'up') newPosition[2] += MOVE_SIZE;
      if (direction === 'down') newPosition[2] -= MOVE_SIZE;
      if (direction === 'left') newPosition[0] += MOVE_SIZE;
      if (direction === 'right') newPosition[0] -= MOVE_SIZE;
      setPosition(newPosition);
    },
    [position],
  );

  const rotate = useCallback(
    (direction: 'up' | 'down' | 'left' | 'right') => {
      const newRotation: [number, number, number] = [...rotation];
      if (direction === 'up') newRotation[2] += ROTATE_SIZE;
      if (direction === 'down') newRotation[2] -= ROTATE_SIZE;
      if (direction === 'left') newRotation[0] += ROTATE_SIZE;
      if (direction === 'right') newRotation[0] -= ROTATE_SIZE;
      setRotation(newRotation);
    },
    [rotation],
  );

  return { position, rotation, move, rotate };
};
