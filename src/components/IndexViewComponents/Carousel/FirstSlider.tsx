import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

function SceneGLTF() {
  const gltf = useLoader(GLTFLoader, '/models/unused_blue_vans_shoe/scene.gltf')

  const mesh = useRef<THREE.Object3D>()

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.z =
        (Math.cos(clock.getElapsedTime()) * Math.PI) / 17
    }
  })
  return (
    <primitive
      ref={mesh}
      object={gltf.scene}
      position={[-3, -1.6, 0]}
      rotation={[0, 1.2, 0]}
      scale={1.2}
    />
  )
}

export default function FirstSlider() {
  return (
    <div className="relative h-48">
      <h3 className="absolute top-1/3 right-5 sm:right-1/4 md:right-1/3 font-extrabold text-xl text-end uppercase">
        Vans Old School
        <br />
        <span className="text-blue-700 font-extrabold uppercase">Blue</span>
      </h3>
      <Canvas>
        <Suspense fallback={null}>
          <SceneGLTF />
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={3}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
