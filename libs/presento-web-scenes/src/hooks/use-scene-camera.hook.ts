import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { PerspectiveCamera } from 'three';

type UseSceneCameraProps = {
  cameraName: string;
};
export const useSceneCamera = (props: UseSceneCameraProps) => {
  const { cameraName } = props;
  const { camera, scene, set } = useThree();

  useEffect(() => {
    if (camera.name === cameraName) {
      console.info('Scene Camera Used');
      return;
    }

    const sceneCamera = scene.getObjectByName(
      cameraName,
    ) as PerspectiveCamera | null;
    if (!sceneCamera) return;
    set({ camera: sceneCamera });
  }, [camera.name, cameraName, scene, set]);
};
