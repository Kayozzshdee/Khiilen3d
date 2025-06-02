"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function ThreeFunction() {
  const [texture, setTexture] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTextureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setError(null);
      const url = URL.createObjectURL(file);
      setTexture(url);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <label
        htmlFor="file-upload"
        className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-md cursor-pointer hover:bg-gray-200 transition"
      >
        📂 Upload
      </label>
      <Input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleTextureUpload}
        className="hidden"
      />
      {error && <p className="text-red-500">{error}</p>}

      {/* Сонгосон зураг харагдах хэсэг */}
      {texture && (
        <img
          src={texture}
          alt="Uploaded texture"
          className="w-24 h-24 mt-2 rounded-md object-cover border"
        />
      )}
    </div>
  );
}
