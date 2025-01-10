// /components/tools/blog/converters/document-to-blog-converter.tsx
// This component handles conversion of document files into blog post format

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface DocumentToBlogConverterProps {
  onConvert: (file: File) => Promise<void>;
}

const DocumentToBlogConverter: React.FC<DocumentToBlogConverterProps> = ({ onConvert }) => {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleConvert = async () => {
    if (!selectedFile) return;
    try {
      setLoading(true);
      await onConvert(selectedFile);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Document to Blog Converter</h2>
      <Input
        type="file"
        accept=".doc,.docx,.pdf,.txt"
        onChange={handleFileChange}
      />
      <Button 
        onClick={handleConvert}
        disabled={loading || !selectedFile}
      >
        {loading ? 'Converting...' : 'Convert to Blog Post'}
      </Button>
      <Textarea
        placeholder="Converted content will appear here..."
        className="h-[300px]"
        readOnly
      />
    </div>
  );
};

export default DocumentToBlogConverter;
