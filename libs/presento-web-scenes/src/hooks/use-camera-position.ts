import { MutableRefObject, useCallback, useMemo } from 'react';
import { RootState } from '@react-three/fiber';
import { Direction2D } from '@presento/presento-web-types';

const STEP = 0.0025 as const;

type UseCameraPositionParams = {
  rootStateRef: MutableRefObject<RootState | null>;
};

export const useCameraPosition = (params: UseCameraPositionParams) => {
  const { rootStateRef } = params;
  const move = useCallback(
    (direction: Direction2D) => {
      if (!rootStateRef.current) return;
      const { camera } = rootStateRef.current;
      if (direction === '+y') camera.translateY(STEP);
      if (direction === '-y') camera.translateY(-STEP);
      if (direction === '+x') camera.translateX(STEP);
      if (direction === '-x') camera.translateX(-STEP);
      rootStateRef.current.invalidate();
    },
    [rootStateRef],
  );

  return useMemo(() => ({ move }), [move]);
};
