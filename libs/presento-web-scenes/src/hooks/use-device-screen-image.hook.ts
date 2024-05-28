import { useEffect } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { Mesh, TextureLoader, MeshBasicMaterial } from 'three';

type UseDeviceScreenImageParams = {
  meshName: string;
  imageSrc: string;
};
export const useDeviceScreenImage = (params: UseDeviceScreenImageParams) => {
  const { meshName, imageSrc } = params;
  const { scene } = useThree();
  const texture = useLoader(TextureLoader, imageSrc);

  useEffect(() => {
    const sceneCamera = scene.getObjectByName(meshName) as Mesh | null;
    if (!sceneCamera) return;

    // Flip vertically
    texture.repeat.y = -1;
    texture.offset.y = 1;

    const material = new MeshBasicMaterial({ map: texture });
    sceneCamera.material = material;
    sceneCamera.material.needsUpdate = true;
  }, [meshName, scene, texture]);
};
