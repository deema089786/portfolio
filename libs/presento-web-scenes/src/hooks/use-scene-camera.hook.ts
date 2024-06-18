import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { PerspectiveCamera } from 'three';

type UseSceneCameraProps = {
  cameraName: string;
  cameraPosition: [number, number, number];
  cameraRotation: [number, number, number];
};
export const useSceneCamera = (props: UseSceneCameraProps) => {
  const { cameraName, cameraPosition, cameraRotation } = props;
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

  useEffect(() => {
    if (camera.name !== cameraName) {
      console.info('Scene Camera Not Found');
      return;
    }
    console.info('Scene Camera Position Updated');
    console.log(cameraRotation);

    camera.position.set(...cameraPosition);
    camera.rotation.set(...cameraRotation);
  }, [camera, cameraName, cameraPosition, cameraRotation]);
};
