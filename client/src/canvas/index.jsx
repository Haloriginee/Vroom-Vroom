import { Canvas } from "@react-three/fiber";
import { Center, Environment } from "@react-three/drei";

import Car from "./Car";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";


const Model3D = () => {
  return (

    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
       { /*<Backdrop  />*/}
        <Center>
          <Car />
        </Center>
      </CameraRig>
    </Canvas>

  )
}

export default Model3D
