"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type SceneProject = {
  name: string;
  slug: string;
  color: string;
  position: [number, number, number];
};

export const sceneProjects: SceneProject[] = [
  { name: "RepoLens", slug: "repolens", color: "#b7ff4a", position: [-2.7, 1.45, 0.1] },
  { name: "GitHubAI", slug: "githubai", color: "#55d9ff", position: [0, 1.55, 0.1] },
  {
    name: "TrueRecruit",
    slug: "fake-recruitment-verifier",
    color: "#ff785c",
    position: [2.4, 1.35, 0.1],
  },
];

function Workstation({ onProjectSelect }: { onProjectSelect: (slug: string) => void }) {
  const group = useRef<THREE.Group>(null);
  const target = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ pointer, clock }) => {
    if (!group.current) return;
    target.set(pointer.x * 0.18, pointer.y * 0.1, 0);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, target.x, 0.035);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -target.y, 0.035);
    group.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.035;
  });

  return (
    <group ref={group} position={[0, -0.75, 0]} rotation={[0.08, -0.12, 0]}>
      <mesh position={[0, -0.25, 0]} receiveShadow>
        <boxGeometry args={[7.4, 0.32, 4.2]} />
        <meshStandardMaterial color="#0b1a2c" roughness={0.56} metalness={0.36} />
      </mesh>
      <mesh position={[0, -0.02, -1.6]} receiveShadow>
        <boxGeometry args={[7.8, 0.12, 0.18]} />
        <meshStandardMaterial color="#55d9ff" emissive="#073c55" emissiveIntensity={2.2} />
      </mesh>
      <mesh position={[0, 0.06, 0]} receiveShadow>
        <boxGeometry args={[6.9, 0.1, 3.5]} />
        <meshStandardMaterial color="#101f33" roughness={0.32} metalness={0.62} />
      </mesh>

      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.08}>
        <group position={[0, 1.3, -0.4]}>
          <mesh castShadow>
            <boxGeometry args={[3.1, 1.9, 0.16]} />
            <meshStandardMaterial color="#172d45" roughness={0.28} metalness={0.66} />
          </mesh>
          <mesh position={[0, 0, 0.1]}>
            <planeGeometry args={[2.8, 1.6]} />
            <meshStandardMaterial color="#06101c" emissive="#0b5d77" emissiveIntensity={0.52} roughness={0.18} />
          </mesh>
          <mesh position={[0, -1.12, 0]}>
            <boxGeometry args={[0.18, 1.1, 0.18]} />
            <meshStandardMaterial color="#203d5d" metalness={0.78} roughness={0.2} />
          </mesh>
          <mesh position={[0, -1.68, 0]}>
            <boxGeometry args={[1.3, 0.12, 0.62]} />
            <meshStandardMaterial color="#172d45" metalness={0.68} roughness={0.24} />
          </mesh>
          <mesh position={[-0.7, 0.35, 0.2]}>
            <boxGeometry args={[0.45, 0.08, 0.02]} />
            <meshStandardMaterial color="#b7ff4a" emissive="#6da528" emissiveIntensity={2} />
          </mesh>
          <mesh position={[-0.7, 0.08, 0.2]}>
            <boxGeometry args={[0.82, 0.06, 0.02]} />
            <meshStandardMaterial color="#55d9ff" emissive="#12647b" emissiveIntensity={2} />
          </mesh>
        </group>
      </Float>

      {sceneProjects.map((project) => (
        <group
          key={project.slug}
          position={project.position}
          rotation={[0, 0, project.slug === "githubai" ? 0 : project.slug === "repolens" ? 0.12 : -0.12]}
          onClick={(event) => {
            event.stopPropagation();
            onProjectSelect(project.slug);
          }}
        >
          <mesh castShadow>
            <boxGeometry args={[1.4, 0.9, 0.08]} />
            <meshStandardMaterial color="#12263c" metalness={0.62} roughness={0.24} />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <planeGeometry args={[1.18, 0.68]} />
            <meshStandardMaterial color="#07121f" emissive={project.color} emissiveIntensity={0.42} />
          </mesh>
          <mesh position={[0, -0.05, 0.075]}>
            <boxGeometry args={[0.52, 0.045, 0.02]} />
            <meshStandardMaterial color={project.color} emissive={project.color} emissiveIntensity={1.7} />
          </mesh>
        </group>
      ))}

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
        <group position={[3.2, 0.75, -0.4]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.34, 0.48, 0.72, 24]} />
            <meshStandardMaterial color="#1e3c56" metalness={0.56} roughness={0.26} />
          </mesh>
          <mesh position={[0, 0.5, 0]}>
            <sphereGeometry args={[0.17, 16, 16]} />
            <meshStandardMaterial color="#b7ff4a" emissive="#477c1c" emissiveIntensity={1.5} />
          </mesh>
        </group>
      </Float>

      <mesh position={[-3.2, 0.75, -0.3]} castShadow>
        <cylinderGeometry args={[0.34, 0.44, 0.68, 20]} />
        <meshStandardMaterial color="#2a1832" emissive="#6c1f75" emissiveIntensity={0.7} />
      </mesh>
    </group>
  );
}

export function FuturisticScene({
  onProjectSelect,
  reducedMotion = false,
}: {
  onProjectSelect: (slug: string) => void;
  reducedMotion?: boolean;
}) {
  return (
    <div className="relative h-full w-full" aria-label="Interactive 3D workstation">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 2.8, 8.2], fov: 34 }}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <color attach="background" args={["#050b14"]} />
        <fog attach="fog" args={["#050b14", 8, 17]} />
        <ambientLight intensity={0.8} color="#7ab5d6" />
        <directionalLight position={[4, 7, 5]} intensity={1.7} color="#d9f4ff" castShadow />
        <pointLight position={[2.8, 2.5, 1.8]} intensity={4} distance={7} color="#ff784f" />
        <pointLight position={[-2.8, 2.6, 1]} intensity={3} distance={6} color="#55d9ff" />
        <Workstation onProjectSelect={onProjectSelect} />
        <ContactShadows position={[0, -1.05, 0]} opacity={0.42} scale={9} blur={2.6} far={4} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
