// /components/tools/blog/prompts/image-prompt-generator.tsx
// This component generates prompts for creating blog-related images

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ImagePromptGeneratorProps {
  onGenerate: (topic: string, style: string) => Promise<void>;
}

const ImagePromptGenerator: React.FC<ImagePromptGeneratorProps> = ({ onGenerate }) => {
  const [topic, setTopic] = React.useState('');
  const [style, setStyle] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      await onGenerate(topic, style);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Blog Image Prompt Generator</h2>
      <Input
        placeholder="Enter blog topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Input
        placeholder="Enter desired image style"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
      />
      <Button 
        onClick={handleGenerate}
        disabled={loading || !topic}
      >
        {loading ? 'Generating...' : 'Generate Image Prompt'}
      </Button>
      <Textarea
        placeholder="Generated prompt will appear here..."
        className="h-[200px]"
        readOnly
      />
    </div>
  );
};

export default ImagePromptGenerator;
