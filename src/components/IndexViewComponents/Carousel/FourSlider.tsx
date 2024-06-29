import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

function SceneGLTF() {
  const gltf = useLoader(
    GLTFLoader,
    '/models/colorful-nike-shoe-floating/scene.gltf',
  )

  const mesh = useRef<THREE.Object3D>()

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.z =
        (Math.cos(clock.getElapsedTime()) * Math.PI) / 14
    }
  })
  return (
    <primitive
      ref={mesh}
      object={gltf.scene}
      position={[-3.5, 0, 0]}
      rotation={[0, -1, 0]}
      scale={5}
    />
  )
}

export default function FourSlider() {
  return (
    <div className="relative h-48 w-full">
      <h3 className="absolute top-1/3 right-5 sm:right-1/4 md:right-1/3 font-extrabold text-xl text-end uppercase">
        New Nike Shoes
        <br />
        <span className="text-red-600">Colorful</span>
      </h3>
      <Canvas>
        <Suspense fallback={null}>
          <SceneGLTF />
          <ambientLight intensity={2} />
          <pointLight position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
