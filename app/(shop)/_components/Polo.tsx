"use client";
import React from "react";
import {Decal, useGLTF, useTexture, OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

interface PoloProps {
  model: string;
}

export default function Polo({model}: PoloProps) {
  const texture = useTexture("/logo.png");
  const {scene} = useGLTF(model);
  console.log(texture);
  console.log(scene);

  return (
    <>
      <Canvas>
        <OrbitControls />
        <mesh material-metalness={0.1} dispose={null}>
          <primitive
            object={scene}
            scale={0.01}
            position={[0, -1, 0]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <Decal
            debug
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            map={texture}
            scale={1}
          />
        </mesh>
      </Canvas>

      {/* Canvas-ийн ГАДНАХ HTML */}
      <div>
        <p>Texture: {texture ? "Loaded" : "Not Loaded"}</p>
        <p>Scene: {scene ? "Loaded" : "Not Loaded"}</p>
      </div>
    </>
  );
}
