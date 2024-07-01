import React, { useEffect } from 'react';
import { SoftShadows } from '@react-three/drei';
import { RootState, useThree } from '@react-three/fiber';

import { SCENE_SCREEN_VIEW_HTML_ID } from '../constants';
import { useSceneDevice } from '../hooks/use-scene-device.hook';

type SceneConfigurationProps = {
  deviceName: string;
  devicePosition: [number, number, number];
  deviceRotation: [number, number, number];

  screenImageSrc: string;
  screenMeshName: string;
  onRootState(rootState: RootState): void;

  cameraZoomValue: number;
};

export const SceneConfiguration: React.FC<SceneConfigurationProps> = (
  props,
) => {
  const {
    deviceName,
    devicePosition,
    deviceRotation,

    screenImageSrc,
    onRootState,

    cameraZoomValue,
  } = props;

  const rootState = useThree();

  useSceneDevice({ deviceName, devicePosition, deviceRotation });

  useEffect(() => {
    onRootState(rootState);
  }, [onRootState, rootState]);

  // region Camera Zoom
  useEffect(() => {
    const { camera } = rootState;
    camera.zoom = cameraZoomValue;
    camera.updateProjectionMatrix();
  }, [cameraZoomValue, rootState]);
  // endregion

  // region Device Html Content
  useEffect(() => {
    const screenView = document.getElementById(SCENE_SCREEN_VIEW_HTML_ID);
    if (!screenView) return;
    screenView.style.backgroundImage = `url(${screenImageSrc})`;
  }, [screenImageSrc]);
  // endregion

  return <SoftShadows size={100} focus={2} samples={20} />;
};
