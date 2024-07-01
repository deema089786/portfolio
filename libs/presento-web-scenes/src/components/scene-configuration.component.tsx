import React, { useEffect } from 'react';
import { SoftShadows } from '@react-three/drei';
import { RootState, useThree } from '@react-three/fiber';

import { useDeviceScreenImage } from '../hooks/use-device-screen-image.hook';
import { useSceneDevice } from '../hooks/use-scene-device.hook';

type SceneConfigurationProps = {
  deviceName: string;
  devicePosition: [number, number, number];
  deviceRotation: [number, number, number];

  screenImageSrc: string;
  screenMeshName: string;
  onRootState(rootState: RootState): void;
};

export const SceneConfiguration: React.FC<SceneConfigurationProps> = (
  props,
) => {
  const {
    deviceName,
    devicePosition,
    deviceRotation,

    screenMeshName,
    screenImageSrc,
    onRootState,
  } = props;

  const rootState = useThree();

  useSceneDevice({ deviceName, devicePosition, deviceRotation });
  useDeviceScreenImage({ imageSrc: screenImageSrc, meshName: screenMeshName });

  useEffect(() => {
    onRootState(rootState);
  }, [onRootState, rootState]);

  return <SoftShadows size={100} focus={2} samples={20} />;
};
