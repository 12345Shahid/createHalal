// /hooks/use-file-management.ts
// Custom hook for file management operations

import { useState, useCallback } from 'react';
import { fileHandlers } from '@/lib/tools/blog/files/file-handlers';
import { exportUtils } from '@/lib/tools/blog/files/export-utils';

export function useFileManagement(userId: string) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = useCallback(async (file: File) => {
    try {
      setUploading(true);
      setError(null);

      if (!fileHandlers.validateFile(file)) {
        throw new Error('Invalid file type or size');
      }

      return await fileHandlers.uploadFile(file, userId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      throw err;
    } finally {
      setUploading(false);
    }
  }, [userId]);

  const exportContent = useCallback(async (content: string, format: 'txt' | 'pdf' | 'docx') => {
    try {
      return await exportUtils.exportContent(content, { format });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Export failed');
      throw err;
    }
  }, []);

  return {
    uploadFile,
    exportContent,
    uploading,
    error
  };
}
