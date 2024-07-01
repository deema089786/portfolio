import { useCallback, useMemo, useState } from 'react';
import { getSrcFromFile, uploadClintFileToApp } from '@presento/utils';

export const useDeviceScreenImageState = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const selectImageSrc = useCallback(async () => {
    const file = await uploadClintFileToApp();
    if (!file) return;
    const fileSrc = await getSrcFromFile(file);
    if (!fileSrc) return;
    setImageSrc(fileSrc);
  }, []);

  const reset = useCallback(() => setImageSrc(null), []);

  return useMemo(
    () => ({ imageSrc, selectImageSrc, reset }),
    [imageSrc, selectImageSrc, reset],
  );
};
