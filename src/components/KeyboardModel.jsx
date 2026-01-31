import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, RoundedBox } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// THE FUCKING CUBE
function RotatingCube({ caseColor, keyColor, isNeon }) {
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
          color={caseColor}
          metalness={0.6}
          roughness={0.2}
          emissive={isNeon ? caseColor : "black"}
          emissiveIntensity={isNeon ? 2 : 0} 
        />
      </RoundedBox> //so, mahimo ni siyag rounded rectangle or circle with sharp edges?

      {keys.map((pos, index) => (
        <mesh key={index} position={pos}>
          <boxGeometry args={[0.24, 0.1, 0.24]} />
          <meshStandardMaterial 
            color={keyColor} 
            roughness={0.4} 
          />
        </mesh>
      ))}
    </group>
  );
}

export default function KeyboardModel({ caseColor, keyColor, isNeon }) {
  return (
    <div className="w-full h-full relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        
        <ambientLight intensity={isNeon ? 0.2 : 0.5} />
        <Environment preset="city" /> 

        <RotatingCube caseColor={caseColor} keyColor={keyColor} isNeon={isNeon} />
        
        {isNeon && (
          <EffectComposer>
            <Bloom 
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9} 
              intensity={1.5}
            />
          </EffectComposer>
        )}

        <OrbitControls 
          enableZoom={false} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 2} 
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

// I goon to Ember Heirloom