import { useLoader, useThree } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import { WebGLPathTracer, BlurredEnvMapGenerator } from 'three-gpu-pathtracer';
import { OrbitControls } from '@react-three/drei';
import { EquirectangularReflectionMapping, PerspectiveCamera } from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

export const usePathTracer = () => {
  const { gl: renderer, camera, scene, set } = useThree();
  const [pathTracer] = useState<WebGLPathTracer>(() => {
    const pathTracer = new WebGLPathTracer(renderer);
    return pathTracer;
  });
  const envTexture = useLoader(RGBELoader, '/hdri/hangar_interior_1k.hdr');

  useEffect(() => {
    envTexture.mapping = EquirectangularReflectionMapping;
    const generator = new BlurredEnvMapGenerator(renderer);
    const blurredEnvTexture = generator.generate(envTexture, 0.05);
    scene.environment = blurredEnvTexture;
    scene.environmentIntensity = 5;
  }, [envTexture, renderer, scene]);

  // Initiate WebGLPathTracer
  useEffect(() => {
    pathTracer.setScene(scene, camera);

    const animate = () => {
      pathTracer.renderSample();
      requestAnimationFrame(animate);
    };
    animate();
  }, [camera, pathTracer, scene]);

  // Assign scene camera
  useEffect(() => {
    const cameraName = 'x-scene-camera';
    if (camera.name === cameraName) return;
    const sceneCamera = scene.getObjectByName(
      cameraName,
    ) as PerspectiveCamera | null;
    if (!sceneCamera) return;
    // console.log('Init camera');
    set({ camera: sceneCamera });
  }, [camera.name, scene, set]);

  return { updateCamera: () => pathTracer?.updateCamera() };
};

export const PathTracer: React.FC = () => {
  const { updateCamera } = usePathTracer();
  return <OrbitControls onChange={() => updateCamera()} />;
};
