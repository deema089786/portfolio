import { MutableRefObject, useCallback, useState } from 'react';
import { Orientation } from '@presento/presento-web-types';
import { RootState } from '@react-three/fiber';

const RESOLUTIONS: Record<Orientation, { width: number; height: number }> = {
  horizontal: { width: 1024, height: 576 },
  vertical: { width: 576, height: 1024 },
};

const DEFAULT_ORIENTATION: Orientation = 'horizontal';

type UseCameraOrientationParams = {
  initialOrientation?: Orientation;
  rootStateRef: MutableRefObject<RootState | null>;
};
export const useCameraOrientation = (params: UseCameraOrientationParams) => {
  const { initialOrientation = DEFAULT_ORIENTATION, rootStateRef } = params;
  const [orientation, setOrientation] =
    useState<Orientation>(initialOrientation);
  const [resolution, setResolution] = useState<{
    width: number;
    height: number;
  }>(RESOLUTIONS[initialOrientation]);

  const update = useCallback(
    (newOrientation?: Orientation) => {
      if (newOrientation) {
        setOrientation(newOrientation);
        setResolution(RESOLUTIONS[newOrientation]);
        return;
      }
      if (orientation === 'horizontal') {
        setOrientation('vertical');
        setResolution(RESOLUTIONS['vertical']);
        return;
      }
      if (orientation === 'vertical') {
        setOrientation('horizontal');
        setResolution(RESOLUTIONS['horizontal']);
        return;
      }

      rootStateRef.current?.invalidate();
    },
    [orientation, rootStateRef],
  );

  return { orientation, resolution, update };
};
