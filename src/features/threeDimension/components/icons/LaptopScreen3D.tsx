"use client";

import { useMemo, useRef } from "react";
import type { Group } from "three";
import {
  CanvasTexture,
  DoubleSide,
  Quaternion,
  SRGBColorSpace,
  Vector3,
} from "three";

interface LaptopScreen3DProps {
  hovered: boolean;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function createScreenTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 768;

  const ctx = canvas.getContext("2d");
  if (!ctx) return new CanvasTexture(canvas);

  // Main warm yellow/orange app surface
  ctx.fillStyle = "#2D3C59";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Header bar
  ctx.fillStyle = "#F8D96A";
  drawRoundedRect(ctx, 56, 52, 912, 92, 32);
  ctx.fill();

  // Traffic lights
  const dots = ["#FF6B6B", "#F8D96A", "#86D89A"];
  dots.forEach((color, index) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(112 + index * 42, 98, 13, 0, Math.PI * 2);
    ctx.fill();
  });

  // Content pills (left)
  ctx.fillStyle = "#86D89A";
  drawRoundedRect(ctx, 74, 188, 420, 110, 28);
  ctx.fill();

  drawRoundedRect(ctx, 74, 330, 348, 84, 24);
  ctx.fill();

  drawRoundedRect(ctx, 74, 438, 348, 84, 24);
  ctx.fill();

  // Top right card strip
  drawRoundedRect(ctx, 564, 188, 330, 86, 24);
  ctx.fill();

  // Pink hero card on right
  const pinkGradient = ctx.createLinearGradient(560, 280, 920, 640);
  pinkGradient.addColorStop(0, "#FF5A76");
  pinkGradient.addColorStop(1, "#F03F68");
  ctx.fillStyle = pinkGradient;
  drawRoundedRect(ctx, 560, 286, 334, 312, 44);
  ctx.fill();

  // Subtle shadow at card bottom
  const shadowGradient = ctx.createLinearGradient(560, 560, 560, 700);
  shadowGradient.addColorStop(0, "rgba(0,0,0,0.12)");
  shadowGradient.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = shadowGradient;
  drawRoundedRect(ctx, 560, 540, 334, 70, 24);
  ctx.fill();

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function LightBeam({ hovered }: { hovered: boolean }) {
  const beamRef = useRef<Group>(null);

  // Create a beam from light source to screen
  const startPos = new Vector3(0.8, -0.55, 0.4);
  const endPos = new Vector3(-4, -5.7, 0.1);
  const distance = startPos.distanceTo(endPos);
  const midpoint = new Vector3()
    .addVectors(startPos, endPos)
    .multiplyScalar(0.5);
  const direction = new Vector3()
    .subVectors(endPos, startPos)
    .normalize();

  // Calculate rotation to point from start to end
  const axis = new Vector3(0, 1, 0);
  const targetDir = direction.clone();
  const quaternion = new Quaternion();
  const angle = Math.acos(axis.dot(targetDir));
  const rotAxis = new Vector3().crossVectors(axis, targetDir).normalize();
  quaternion.setFromAxisAngle(rotAxis, angle);

  return (
    <group ref={beamRef} position={[midpoint.x, midpoint.y, midpoint.z]}>
      {/* Main light beam - cone */}
      <mesh
        quaternion={[quaternion.x, quaternion.y, quaternion.z, quaternion.w]}
      >
        <coneGeometry args={[0.47, distance - 0.3, 42]} />
        <meshBasicMaterial
          color="#F8D96A"
          transparent
          opacity={hovered ? 0.5 : 0.15}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}

export function LaptopScreen3D({ hovered }: LaptopScreen3DProps) {
  const rootRef = useRef<Group>(null);
  const screenTexture = useMemo(() => createScreenTexture(), []);

  return (
    <group>
      <LightBeam hovered={hovered} />
      <group
        ref={rootRef}
        position={[0, -1.5, 1]}
        rotation={[0.3, -0.6, 0.16]}
        scale={hovered ? 1.2 : 1}
      >
        {/* Top deck */}
        <mesh position={[0, 0.085, -0.03]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.025, 1.02]} />
          <meshStandardMaterial
            color="#D7D1DF"
            metalness={0.12}
            roughness={0.55}
          />
        </mesh>

        {/* Keyboard keys */}
        <group position={[-0.55, 0.11, -0.28]}>
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 9 }).map((__, col) => (
              <mesh
                key={`k-${row}-${col}`}
                position={[col * 0.14, 0, row * 0.11]}
                castShadow
                receiveShadow
              >
                <boxGeometry args={[0.105, 0.022, 0.075]} />
                <meshStandardMaterial
                  color="#BBB4C7"
                  metalness={0.08}
                  roughness={0.58}
                />
              </mesh>
            ))
          )}
        </group>

        {/* Trackpad */}
        <mesh position={[-0.08, 0.105, 0.27]} castShadow receiveShadow>
          <boxGeometry args={[0.45, 0.014, 0.28]} />
          <meshStandardMaterial
            color="#B2ABBE"
            metalness={0.18}
            roughness={0.45}
          />
        </mesh>

        {/* Hinge */}
        <mesh
          position={[0, 0.11, -0.53]}
          rotation={[0, 0, Math.PI * 0.5]}
          castShadow
        >
          <cylinderGeometry args={[0.03, 0.03, 1.45, 20]} />
          <meshStandardMaterial
            color="#CBC5D4"
            metalness={0.3}
            roughness={0.35}
          />
        </mesh>

        {/* Screen lid group */}
        <group position={[0, 0.07, -0.54]} rotation={[-0.6, 0, 0]}>
          {/* Outer lid */}
          <mesh position={[0, 0.52, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.36, 0.9, 0.05]} />
            <meshStandardMaterial
              color="#DDD8E6"
              metalness={0.18}
              roughness={0.42}
            />
          </mesh>

          {/* Inner bezel */}
          <mesh position={[0, 0.52, 0.045]} castShadow receiveShadow>
            <boxGeometry args={[1.25, 0.79, 0.024]} />
            <meshStandardMaterial
              color="#F2EEF8"
              metalness={0.06}
              roughness={0.62}
            />
          </mesh>

          {/* Actual screen content */}
          <mesh position={[0, 0.52, 0.061]}>
            <boxGeometry args={[1.2, 0.74, 0.008]} />
            <meshStandardMaterial
              map={screenTexture}
              roughness={0.75}
              metalness={0.0}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}
