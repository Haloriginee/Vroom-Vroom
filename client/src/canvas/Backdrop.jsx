import React, { useRef } from 'react';
import { easing } from 'maath';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

const Backdrop = () => {

  const shadows = useRef();

  return (

    <AccumulativeShadows
      position={[0, -8, -0.5]}
      ref={shadows}
      frames={60}
      alphaTest={1.5}
      scale={30}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
    </AccumulativeShadows>

  )
}

export default Backdrop
