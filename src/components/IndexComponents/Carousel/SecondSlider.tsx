import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { Text } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'
// import { FontLoader } from 'three-stdlib'

function SceneGLTF() {
  const gltf = useLoader(GLTFLoader, '/models/vans_old_skool_green/scene.gltf')
  const mesh = useRef<THREE.Object3D>()

  useFrame(({ clock }) => {
    if (mesh.current) {
      // mesh.current.position.y = (Math.cos(clock.getElapsedTime()) * Math.PI) / 7
      mesh.current.rotation.z =
        (Math.cos(clock.getElapsedTime()) * Math.PI) / 13
    }
  })
  return (
    <primitive
      ref={mesh}
      object={gltf.scene}
      position={[3, -1.3, 1]}
      rotation={[0, -1.15, 0]}
      scale={1.3}
    />
  )
}

export default function SecondSlider() {
  return (
    <>
      <h3 className="absolute top-1/3 left-5 sm:left-1/4 md:left-1/3 font-bold text-2xl">
        Vans Old School
        <br />
        <span className="text-emerald-800">Green</span>
      </h3>
      <Canvas className="bg-none">
        <Suspense fallback={null}>
          <SceneGLTF />
          <ambientLight intensity={3} />
          <pointLight position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </>
  )
}
