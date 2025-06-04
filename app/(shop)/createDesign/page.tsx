"use client";
import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Polo from "../_components/Polo";

export default function Page() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Polo model='/models/Polo.gltf' />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
