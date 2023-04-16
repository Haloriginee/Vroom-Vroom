import React from 'react';
import { easing } from "maath";
import { useSnapshot } from 'valtio';
import state from '../store';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from "@react-three/drei";

const Car = () => {

  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/honda_civic.glb')

  const stickerTexture = useTexture(snap.stickerDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => easing.dampC(materials.Material.color, snap.color, 0.25, delta));

  const stateString = JSON.stringify(snap);

  return (

    <group
      key={stateString}
    >
      <mesh
        castShadow
        geometry={nodes.Object_5.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >

        {snap.isFullTexture && (

          <Decal
            position={[0.3, 0, 0]}
            rotation={[0, 0, 0]}
            scale={7}
            map={fullTexture}
          />
        )}

        {snap.isStickerTexture && (

        <Decal
          position={[0, -0.09, 0.20]}
          rotation={[0, 0, 0]}
          scale={0.88}
          map={stickerTexture}
          map-anisotropy={16}
          depthTest={false}
          depthWrite={true}
        />
        )}
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_9.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_8.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_7.geometry}
        //material={materials.Material}
        //material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_11.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_12.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_13.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_14.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_15.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_59.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_61.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_62.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object_64.geometry}
        material={materials.Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>


    </group>

  )
}

export default Car
