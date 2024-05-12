import { Center, Decal, useGLTF, useTexture } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React, { MutableRefObject, useEffect, useMemo, useRef } from 'react';
import { Group, Mesh, MeshStandardMaterial, Euler, MathUtils } from 'three';
import { GLTF } from 'three-stdlib';

export type GLTFResult = GLTF & {
  nodes: { [key: string]: Mesh };
  materials: { [key: string]: MeshStandardMaterial };
};

type ModelGLTFProps = {
  src: string;
  groupRef?: MutableRefObject<Group | null>;
  onModelLoaded?(model: GLTFResult): void;
  groupProps?: GroupProps;
};

export const ModelGLTF: React.FC<ModelGLTFProps> = (props) => {
  const { src, groupRef, onModelLoaded, groupProps } = props;
  const gltfModel = useGLTF(src) as GLTFResult;
  const { nodes } = gltfModel;

  const texture = useTexture('/screenshots/default.png');
  console.log({ texture });

  useEffect(() => {
    onModelLoaded?.(gltfModel);
  }, [onModelLoaded, gltfModel]);

  const meshes = useMemo(() => {
    const meshNodes = Object.values(nodes).filter(
      (node) => node.type === 'Mesh',
    );
    console.log(nodes);
    return meshNodes.map((mesh) => (
      <mesh
        key={mesh.id}
        geometry={mesh.geometry}
        material={mesh.name === 'screen' ? undefined : mesh.material}
      >
        {mesh.name === 'screen' && (
          <>
            <meshStandardMaterial color="black" />

            <meshPhysicalMaterial
              // transparent
              // polygonOffset
              // polygonOffsetFactor={-10}
              map={texture}
              map-flipY={false}
              map-anisotropy={16}
              iridescence={1}
              iridescenceIOR={1}
              iridescenceThicknessRange={[0, 1400]}
              roughness={1}
              clearcoat={0.5}
              metalness={0.75}
              toneMapped={false}
            />
          </>
        )}
      </mesh>
    ));
  }, [nodes, texture]);

  return (
    <group dispose={null} ref={groupRef} {...groupProps}>
      <Center top>{meshes}</Center>
    </group>
  );
};
