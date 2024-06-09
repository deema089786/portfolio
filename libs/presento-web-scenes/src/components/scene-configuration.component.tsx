import React, { useEffect } from 'react';
import { OrbitControls, SoftShadows } from '@react-three/drei';
import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import { useThree } from '@react-three/fiber';
import { WebGLRenderer } from 'three';

import { useSceneCamera } from '../hooks/use-scene-camera.hook';
import { useDeviceScreenImage } from '../hooks/use-device-screen-image.hook';

type SceneConfigurationProps = {
  cameraName: string;
  screenImageSrc: string;
  screenMeshName: string;
  onGL(gl: WebGLRenderer): void;
};

export const SceneConfiguration: React.FC<SceneConfigurationProps> = (
  props,
) => {
  const { cameraName, screenMeshName, screenImageSrc, onGL } = props;

  const { gl } = useThree();

  useSceneCamera({ cameraName });
  useDeviceScreenImage({ imageSrc: screenImageSrc, meshName: screenMeshName });

  const { enabled, samples, ...config } = useControls({
    enabled: true,
    size: { value: 80, min: 0, max: 100, step: 0.1 },
    focus: { value: 2, min: 0, max: 2, step: 0.1 },
    samples: { value: 20, min: 1, max: 40, step: 1 },
  });

  useEffect(() => {
    onGL(gl);
  }, [onGL, gl]);

  return (
    <>
      {enabled && <SoftShadows {...config} />}
      <OrbitControls />
      <Perf position="bottom-right" />
    </>
  );
};
