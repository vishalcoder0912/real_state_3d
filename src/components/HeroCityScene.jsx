import {Float, PerspectiveCamera} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import {Suspense, useMemo, useRef} from "react";

const gold = "#C9A227";
const navy = "#0B1F33";
const buildingColors = ["#d7dde6", "#eef2f7", "#b8c2cc", "#f5f1e8"];

const Buildings = () => {
  const groupRef = useRef(null);
  const buildings = useMemo(
    () => Array.from({length: 42}, (_, index) => ({
      x: (index % 7) * 1.25 - 3.75,
      z: Math.floor(index / 7) * 1.1 - 3,
      h: 0.4 + ((index * 7) % 9) * 0.16,
      color: buildingColors[index % buildingColors.length],
    })),
    [],
  );

  useFrame(({clock, pointer}) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = pointer.x * 0.08 + Math.sin(clock.elapsedTime * 0.18) * 0.04;
    groupRef.current.rotation.x = -0.35 + pointer.y * 0.035;
  });

  return (
    <group ref={groupRef} position={[0, -0.95, 0]} rotation={[-0.35, 0, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.04, 0]}>
        <planeGeometry args={[11, 9]} />
        <meshStandardMaterial color={navy} metalness={0.2} roughness={0.55} />
      </mesh>

      {[-3, -1.5, 0, 1.5, 3].map((x) => (
        <mesh key={`road-x-${x}`} rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.005, 0]}>
          <planeGeometry args={[0.035, 8.5]} />
          <meshStandardMaterial color={gold} emissive={gold} emissiveIntensity={0.7} />
        </mesh>
      ))}

      {[-2.5, -1, 0.5, 2].map((z) => (
        <mesh key={`road-z-${z}`} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[0, 0.01, z]}>
          <planeGeometry args={[0.035, 10.5]} />
          <meshStandardMaterial color={gold} emissive={gold} emissiveIntensity={0.5} />
        </mesh>
      ))}

      {buildings.map((building) => (
        <Float key={`${building.x}-${building.z}`} speed={1.2} rotationIntensity={0.04} floatIntensity={0.08}>
          <mesh position={[building.x, building.h / 2, building.z]}>
            <boxGeometry args={[0.52, building.h, 0.52]} />
            <meshStandardMaterial color={building.color} metalness={0.18} roughness={0.42} />
          </mesh>
        </Float>
      ))}

      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.28}>
        <mesh position={[0.2, 2.1, -0.35]}>
          <octahedronGeometry args={[0.42, 0]} />
          <meshStandardMaterial color={gold} emissive={gold} emissiveIntensity={0.9} metalness={0.6} roughness={0.22} />
        </mesh>
      </Float>
    </group>
  );
};

const HeroCityScene = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-95">
      <Canvas dpr={[1, 1.5]} gl={{antialias: true, powerPreference: "high-performance"}}>
        <PerspectiveCamera makeDefault position={[0, 3.7, 7.2]} fov={48} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 7, 5]} intensity={1.4} />
        <pointLight position={[0, 2.5, 2]} color={gold} intensity={1.4} distance={7} />
        <Suspense fallback={null}>
          <Buildings />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(201,162,39,0.28),transparent_34%)]" />
    </div>
  );
};

export default HeroCityScene;
