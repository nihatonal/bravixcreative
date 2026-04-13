"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import FullscreenImageModal from "./FullscreenImageModal";

interface ProjectGalleryClientProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectGalleryClient({
  images,
  projectTitle,
}: ProjectGalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(image)}
            className="relative rounded-lg overflow-hidden shadow-lg group text-left"
            aria-label={`${projectTitle} ekran görüntüsü ${index + 1}`}
          >
            <Image
              width={800}
              height={600}
              src={image}
              alt={`${projectTitle} ekran görüntüsü ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 bg-black/60 p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
              <Expand size={20} className="text-white" />
            </div>
          </button>
        ))}
      </div>

      <FullscreenImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}