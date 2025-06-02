// components/TShirtWithParts.tsx
"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { useState } from "react";
import * as THREE from "three";

function TShirtParts({
  selectedPart,
  selectedColor,
}: {
  selectedPart: string;
  selectedColor: string;
}) {
  const { scene } = useGLTF("/models/shirt.gltf");

  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (child.name === selectedPart) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(selectedColor),
        });
      } else {
        child.material = new THREE.MeshStandardMaterial({ color: "#ffffff" });
      }
    }
  });

  return <primitive object={scene} scale={1.3} />;
}

export default function TShirtWithPartsViewer() {
  const [selectedPart, setSelectedPart] = useState("Front");
  const [selectedColor, setSelectedColor] = useState("#ff0000");

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-2">
        <button onClick={() => setSelectedPart("Front")}>Урд тал</button>
        <button onClick={() => setSelectedPart("Back")}>Ард тал</button>
        <button onClick={() => setSelectedPart("LeftSleeve")}>
          Зүүн ханцуй
        </button>
        <button onClick={() => setSelectedPart("RightSleeve")}>
          Баруун ханцуй
        </button>
      </div>

      <div className="flex gap-2">
        <button onClick={() => setSelectedColor("#ff0000")}>Улаан</button>
        <button onClick={() => setSelectedColor("#0000ff")}>Цэнхэр</button>
        <button onClick={() => setSelectedColor("#00ff00")}>Ногоон</button>
      </div>

      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight />
        <TShirtParts
          selectedPart={selectedPart}
          selectedColor={selectedColor}
        />
      </Canvas>
    </div>
  );
}
