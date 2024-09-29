import React, { useRef } from 'react';  // Ensure React is imported
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import styled from 'styled-components';

const AtomModel = () => {
  const nucleusRef = useRef();
  const electron1Ref = useRef();
  const electron2Ref = useRef();
  const electron3Ref = useRef();

  // useFrame hook runs on every frame, creating the animation
  useFrame(() => {
    if (nucleusRef.current) {
      nucleusRef.current.rotation.y += 0.005; // Slower rotation for nucleus
    }
    if (electron1Ref.current) {
      electron1Ref.current.rotation.y += 0.02; // Rotate electron 1
    }
    if (electron2Ref.current) {
      electron2Ref.current.rotation.y += 0.015; // Rotate electron 2
    }
    if (electron3Ref.current) {
      electron3Ref.current.rotation.y += 0.01; // Rotate electron 3
    }
  });

  return (
    <>
      {/* Nucleus */}
      <mesh ref={nucleusRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={'#ff4081'} emissive={'#ff4081'} emissiveIntensity={0.5} />
      </mesh>

      {/* Electrons */}
      <ElectronOrbit ref={electron1Ref} position={[3, 0, 0]} color="#61dafb" />
      <ElectronOrbit ref={electron2Ref} position={[-3, 0, 0]} color="#21a1f1" />
      <ElectronOrbit ref={electron3Ref} position={[0, 3, 0]} color="#ffeb3b" />
    </>
  );
};

const ElectronOrbit = React.forwardRef(({ position, color }, ref) => (
  <mesh ref={ref} position={position}>
    <sphereGeometry args={[0.2, 32, 32]} />
    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.7} />
  </mesh>
));

const AtomCanvas = styled(Canvas)`
  width: 300px;
  height: 300px;
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const Atom = () => {
  return (
    <AtomCanvas>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      {/* Render the rotating atom */}
      <AtomModel />
    </AtomCanvas>
  );
};

export default Atom;
