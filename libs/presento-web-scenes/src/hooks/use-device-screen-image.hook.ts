import { useEffect } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import {
  Mesh,
  TextureLoader,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MeshPhysicalMaterial,
} from 'three';

type UseDeviceScreenImageParams = {
  meshName: string;
  imageSrc: string;
};
export const useDeviceScreenImage = (params: UseDeviceScreenImageParams) => {
  const { meshName, imageSrc } = params;
  const { scene } = useThree();
  const texture = useLoader(TextureLoader, imageSrc);
  const emissiveMap = useLoader(TextureLoader, imageSrc); // Use separate emissive map if provided

  useEffect(() => {
    const screen = scene.getObjectByName(meshName) as Mesh | null;
    if (!screen) return;

    // Flip vertically
    texture.repeat.y = -1;
    texture.offset.y = 1;

    emissiveMap.repeat.y = -1;
    emissiveMap.offset.y = 1;

    // const material = new MeshBasicMaterial({ map: texture });

    // const material = new MeshStandardMaterial({
    //   map: texture,
    //   emissive: 0xffffff, // White color for the emissive light
    //   emissiveIntensity: 0.1, // Intensity of the emissive light
    //   emissiveMap: texture, // Use the same texture as the emissive map
    // });

    // Create a new material with physical properties and emissive settings
    const material = new MeshPhysicalMaterial({
      map: texture, // Texture for the screen image
      emissive: 0xffffff, // White emissive color for glowing effect
      emissiveIntensity: 2, // Lower intensity to prevent washing out colors
      emissiveMap: emissiveMap, // Use the emissive map
      clearcoat: 1, // Adds a glossy layer to simulate reflective glass
      clearcoatRoughness: 1, // Controls the roughness of the clear coat
      roughness: 1, // Base roughness for the material
      metalness: 0, // Adds some metallic look
    });

    screen.material = material;
    screen.material.needsUpdate = true;
  }, [emissiveMap, meshName, scene, texture]);
};
