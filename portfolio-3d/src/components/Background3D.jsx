import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

// Slowly rotating star field
function StarField() {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(2400)
    for (let i = 0; i < 2400; i++) {
      arr[i] = (Math.random() - 0.5) * 120
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.008
      ref.current.rotation.y -= delta * 0.005
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent color="#818cf8" size={0.12}
        sizeAttenuation depthWrite={false} opacity={0.55}
      />
    </Points>
  )
}

// Static 3D wireframe octahedron — large, background
function OctahedronMesh() {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.06
      ref.current.rotation.y += delta * 0.04
    }
  })
  return (
    <mesh ref={ref} position={[14, 4, -18]}>
      <octahedronGeometry args={[7, 0]} />
      <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.07} />
    </mesh>
  )
}

// Icosahedron top-right
function IcoMesh() {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.04
      ref.current.rotation.z += delta * 0.06
    }
  })
  return (
    <mesh ref={ref} position={[-10, 10, -15]}>
      <icosahedronGeometry args={[5, 1]} />
      <meshBasicMaterial color="#818cf8" wireframe transparent opacity={0.05} />
    </mesh>
  )
}

function CanvasContent() {
  return (
    <>
      <StarField />
      <OctahedronMesh />
      <IcoMesh />
    </>
  )
}

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Suspense fallback={null}>
        <Canvas 
          camera={{ position: [0, 0, 28], fov: 65 }} 
          gl={{ alpha: true, antialias: true }}
          style={{ width: '100%', height: '100%' }}
        >
          <CanvasContent />
        </Canvas>
      </Suspense>
    </div>
  )
}
