import { useEffect } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';

type UseDeviceScreenImageParams = {
  meshName: string;
  imageSrc: string;
};
export const useDeviceScreenImage = (params: UseDeviceScreenImageParams) => {
  const { meshName, imageSrc } = params;
  const { scene } = useThree();
  const texture = useLoader(TextureLoader, imageSrc);
  const emissiveMap = useLoader(TextureLoader, imageSrc); // Use separate emissive map if provided

  // Render to material
  // useEffect(() => {
  //   const screen = scene.getObjectByName(meshName) as Mesh | null;
  //   if (!screen) return;
  //
  //   // Flip vertically
  //   texture.repeat.y = -1;
  //   texture.offset.y = 1;
  //
  //   emissiveMap.repeat.y = -1;
  //   emissiveMap.offset.y = 1;
  //
  //   const material = new MeshStandardMaterial({
  //     map: texture,
  //     color: '#000',
  //     emissive: '#fff',
  //     emissiveIntensity: 0.5,
  //     emissiveMap: emissiveMap, // Use the same texture as the emissive map
  //     metalness: 1, // Higher metalness makes it more reflective
  //     roughness: 1, // Lower roughness makes it more shiny
  //   });
  //
  //   screen.material = material;
  //   screen.material.needsUpdate = true;
  // }, [emissiveMap, meshName, scene, texture]);

  // Render to HTML
  useEffect(() => {
    const screenView = document.getElementById('x-screen-view-html');
    if (!screenView) return;
    screenView.style.backgroundImage = `url(${imageSrc})`;

    const screenViewImg = document.getElementById(
      'x-screen-view-html-img',
    ) as HTMLImageElement;
    if (!screenViewImg) return;
    screenViewImg.src = imageSrc;
  }, [imageSrc]);
};
