import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

type BoxProps = {
  position: [number, number, number]
}

function Box(props: BoxProps) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh | null>(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta
    }
  })
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function FirstSlider() {
  // Genera un array de posiciones aleatorias
  const positions = Array.from({ length: 10 }, () => {
    return [
      Math.random() * 20 - 10, // x
      Math.random() * 20 - 10, // y
      Math.random() * 20 - 10, // z
    ] as [number, number, number]
  })

  return (
    <Canvas className="h-full bg-none">
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {positions.map((position, i) => (
        <Box key={i} position={position} />
      ))}
    </Canvas>
  )
}
