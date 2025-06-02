"use client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { useState, useEffect } from "react";

function Polo({
  model,
  texture,
  scale,
  offset,
}: {
  model: string;
  texture: string;
  scale: number;
  offset: { x: number; y: number };
}) {
  const { scene } = useGLTF(model);
  const loadTexture = useTexture(texture);

  useEffect(() => {
    if (loadTexture) {
      loadTexture.wrapS = THREE.ClampToEdgeWrapping;
      loadTexture.wrapT = THREE.ClampToEdgeWrapping;
      loadTexture.repeat.set(1, 1);
      loadTexture.offset.set(offset.x, offset.y);
    }

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh && child.name === "Ard") {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          map: loadTexture,
          roughness: 0.5,
          metalness: 0.1,
        });

        // ✅ Текстурыг зөвхөн нэг хэсэгт харуулах (UV Mapping)
        const uvAttribute = mesh.geometry.attributes.uv;
        const uvArray = uvAttribute.array as Float32Array;
        for (let i = 0; i < uvArray.length; i += 2) {
          uvArray[i] = uvArray[i] * 0.5 + 0.25; // X координатыг төв рүү шахах
          uvArray[i + 1] = uvArray[i + 1] * 0.5 + 0.25; // Y координатыг төв рүү шахах
        }
        uvAttribute.needsUpdate = true;
      }
    });
  }, [scene, loadTexture, scale, offset]);

  return <primitive object={scene} scale={2} />;
}

export default function PoloModel() {
  const [texture, setTexture] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleTextureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        setError("Файлын хэмжээ 5MB-аас их байж болохгүй!");
        return;
      }

      setError(null);
      const url = URL.createObjectURL(file);
      setTexture(url);
    }
  };

  return (
    <div className="flex items-center justify-center w-[800px] h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <Canvas className="h-full w-full">
          <ambientLight intensity={1} />
          <hemisphereLight
            color={new THREE.Color(0.1, 0.1, 0.1)}
            groundColor={new THREE.Color(2, 2, 2)}
            intensity={1}
          />
          <Polo
            model={"/models/hoodie.gltf"}
            texture={texture || "/placeholder.png"}
            scale={scale}
            offset={offset}
          />
          <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
        </Canvas>

        <div className="flex flex-col items-center gap-4 p-4">
          <label
            htmlFor="file-upload"
            className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-md cursor-pointer hover:bg-gray-200 transition"
          >
            📂 Upload
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleTextureUpload}
            className="hidden"
          />

          {error && <p className="text-red-500">{error}</p>}

          {texture && (
            <img
              src={texture}
              alt="Uploaded texture"
              className="w-24 h-24 mt-2 rounded-md object-cover border"
            />
          )}

          <div className="flex flex-col items-center">
            <label>🔍 Texture Scale: {scale.toFixed(1)}</label>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
            />
          </div>

          <div className="flex flex-col items-center">
            <label>↔ Offset X: {offset.x.toFixed(2)}</label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.01"
              value={offset.x}
              onChange={(e) =>
                setOffset({ ...offset, x: parseFloat(e.target.value) })
              }
            />

            <label>↕ Offset Y: {offset.y.toFixed(2)}</label>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.01"
              value={offset.y}
              onChange={(e) =>
                setOffset({ ...offset, y: parseFloat(e.target.value) })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
