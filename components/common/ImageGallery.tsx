// /components/common/ImageGallery.tsx
// Image gallery component with lightbox functionality

import { useState } from 'react';
import { Modal } from './Modal';

interface Image {
  url: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: Image[];
  columns?: number;
  gap?: number;
}

export function ImageGallery({ 
  images, 
  columns = 3, 
  gap = 4 
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <>
      <div 
        className="grid gap-4" 
        style={{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `${gap * 0.25}rem`
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={selectedImage.alt}
        >
          <div className="flex flex-col items-center">
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-h-[80vh] w-auto"
            />
            {selectedImage.caption && (
              <p className="mt-4 text-gray-600">{selectedImage.caption}</p>
            )}
          </div>
        </Modal>
      )}
    </>
  );
} 