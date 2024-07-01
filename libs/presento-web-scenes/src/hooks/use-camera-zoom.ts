import { useCallback, useMemo, useState } from 'react';

const ZOOM_MIN = 0.5;
const ZOOM_MAX = 2;
const ZOOM_DEFAULT = 1;

export const useCameraZoom = () => {
  const [value, _setValue] = useState<number>(ZOOM_DEFAULT);
  const setValue = useCallback((newValue?: number) => {
    if (!newValue) {
      _setValue(ZOOM_DEFAULT);
      return;
    }
    if (newValue < ZOOM_MIN) {
      _setValue(ZOOM_MIN);
      return;
    }
    if (newValue > ZOOM_MAX) {
      _setValue(ZOOM_MAX);
      return;
    }
    _setValue(newValue);
  }, []);

  return useMemo(() => ({ value, setValue }), [value, setValue]);
};
