// /lib/tools/blog/files/file-handlers.ts
// File handling utility functions

import { storage } from '../auth/firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export interface FileUploadResult {
  url: string;
  path: string;
  filename: string;
}

export const fileHandlers = {
  async uploadFile(file: File, userId: string): Promise<FileUploadResult> {
    const filename = `${Date.now()}-${file.name}`;
    const path = `users/${userId}/files/${filename}`;
    const storageRef = ref(storage, path);

    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    return { url, path, filename };
  },

  validateFile(file: File): boolean {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'audio/mpeg',
      'audio/wav',
      'video/mp4'
    ];

    return file.size <= maxSize && allowedTypes.includes(file.type);
  }
};
