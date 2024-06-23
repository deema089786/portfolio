import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { Group } from 'three';

type UseSceneDeviceProps = {
  deviceName: string;
  devicePosition: [number, number, number];
  deviceRotation: [number, number, number];
};
export const useSceneDevice = (props: UseSceneDeviceProps) => {
  const { deviceName, devicePosition, deviceRotation } = props;
  const { scene, set } = useThree();
  const [device, setDevice] = useState<Group | null>(null);

  useEffect(() => {
    if (device) {
      console.info('Scene Device Used');
      return;
    }

    const sceneDevice = scene.getObjectByName(deviceName) as Group | null;
    if (!sceneDevice) return;
    setDevice(sceneDevice);
  }, [device, deviceName, scene, set]);

  useEffect(() => {
    if (!device) return;

    console.info('Scene Device Position Updated');
    console.log(deviceRotation);

    device.position.set(...devicePosition);
    device.rotation.set(...deviceRotation);
  }, [device, deviceName, devicePosition, deviceRotation]);
};
