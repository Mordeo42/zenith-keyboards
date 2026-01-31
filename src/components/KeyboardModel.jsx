import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, ContactShadows, Environment, RoundedBox } from '@react-three/drei';

function KeyCap({ position }) {
    return (
        <mesh position={position}>
            <boxGeometry args={[0.25, 0.1, 0.25]} />
            <meshStandardMaterial color="#1e293b" roughness={0.1} />
        </mesh>
    )
}

// Fucking Cube but with colors (GASIGE RAKOG ILIS ANI YAWA)
function RotatingCube({ customColor }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.2;
  });

  const keys = [];
  for (let x = -1.8; x < 1.8; x += 0.3) {
    for (let z = -0.6; z < 0.6; z += 0.3) {
      keys.push([x, 0.3, z]);
    }
  }

  return (
    <group ref={meshRef}>
      <RoundedBox args={[4.2, 0.5, 1.8]} radius={0.1} smoothness={4}>
        <meshStandardMaterial 
          color={customColor} 
          metalness={0.6}
          roughness={0.2}
        />
      </RoundedBox>

      {keys.map((pos, index) => (
        <mesh key={index} position={pos}>
          <boxGeometry args={[0.24, 0.1, 0.24]} />
          <meshStandardMaterial color="#1e1e1e" roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

export default function KeyboardModel({ currentBuildColor }) {
  return (
    <div className="w-full h-full relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        
        <RotatingCube customColor={currentBuildColor} />
        
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
}