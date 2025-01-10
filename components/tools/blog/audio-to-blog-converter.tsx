// /components/tools/blog/converters/audio-to-blog-converter.tsx
// This component handles conversion of audio content into blog post format

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface AudioToBlogConverterProps {
  onConvert: (audioUrl: string) => Promise<void>;
}

const AudioToBlogConverter: React.FC<AudioToBlogConverterProps> = ({ onConvert }) => {
  const [audioUrl, setAudioUrl] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleConvert = async () => {
    try {
      setLoading(true);
      await onConvert(audioUrl);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Audio to Blog Converter</h2>
      <Input
        placeholder="Enter audio URL or upload audio file"
        value={audioUrl}
        onChange={(e) => setAudioUrl(e.target.value)}
      />
      <Button 
        onClick={handleConvert}
        disabled={loading || !audioUrl}
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

export default AudioToBlogConverter;
