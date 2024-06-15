import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

function SceneGLTF() {
  const gltf = useLoader(GLTFLoader, '/models/oversized_sweater/scene.gltf')

  const mesh = useRef<THREE.Object3D>()

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.z =
        (Math.cos(clock.getElapsedTime()) * Math.PI) / 10
    }
  })
  return (
    <primitive
      ref={mesh}
      object={gltf.scene}
      position={[0, -6, 0]}
      rotation={[0, 0, 0]}
      scale={5}
    />
  )
}

export default function ThirdSlider() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h3 className="font-extrabold text-3xl sm:text-4xl uppercase text-slate-100 text-opacity-90">
          Oversized sweater
        </h3>
      </div>
      <Canvas>
        <Suspense fallback={null}>
          <SceneGLTF />
          <ambientLight intensity={3} />
          <pointLight position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </>
  )
}
