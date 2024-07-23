import { useCallback, useState } from 'react';
import { RenderQualityValue } from '@presento/presento-web-types';

const QUALITY_TO_PDR: Record<RenderQualityValue, number> = {
  low: 1,
  medium: 2,
  high: 3,
  ultra: 4,
};

const defaultValue: RenderQualityValue = 'medium';

export const useRenderQuality = () => {
  const [quality, setQuality] = useState<{
    value: RenderQualityValue;
    pdr: number;
  }>({ value: defaultValue, pdr: QUALITY_TO_PDR[defaultValue] });

  const update = useCallback(
    (value: RenderQualityValue) =>
      setQuality({
        value,
        pdr: QUALITY_TO_PDR[value],
      }),
    [],
  );

  return { value: quality.value, pdr: quality.pdr, update };
};
