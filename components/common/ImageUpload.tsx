// /components/common/ImageUpload.tsx
// Component for handling image uploads

import { useState, useRef } from 'react';
import { storage } from '@/lib/firebase/storage';

interface ImageUploadProps {
  onUpload: (url: string) => void;
  maxSize?: number; // in MB
  acceptedTypes?: string[];
}

export function ImageUpload({ 
  onUpload, 
  maxSize = 5, 
  acceptedTypes = ['image/jpeg', 'image/png'] 
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (file: File) => {
    if (!acceptedTypes.includes(file.type)) {
      setError('Invalid file type');
      return;
    }

    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size must be less than ${maxSize}MB`);
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const path = `images/${Date.now()}_${file.name}`;
      const snapshot = await storage.ref(path).put(file);
      const url = await snapshot.ref.getDownloadURL();
      onUpload(url);
    } catch (err) {
      setError('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedTypes.join(',')}
        onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
} 