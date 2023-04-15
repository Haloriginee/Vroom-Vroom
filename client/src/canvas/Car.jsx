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

  return (

    <group>
      <mesh
        castShadow
        //geometry={nodes.Roadster.geometry}
        material={materials.lambert1}
        material-rougness={1}
        dispose={null}
      >

      </mesh>
    </group>

  )
}

export default Car
