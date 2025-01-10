// /components/tools/blog/converters/video-to-blog-converter.tsx
// This component handles conversion of video content into blog post format

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface VideoToBlogConverterProps {
  onConvert: (videoUrl: string) => Promise<void>;
}

const VideoToBlogConverter: React.FC<VideoToBlogConverterProps> = ({ onConvert }) => {
  const [videoUrl, setVideoUrl] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleConvert = async () => {
    try {
      setLoading(true);
      await onConvert(videoUrl);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Video to Blog Converter</h2>
      <Input
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <Button 
        onClick={handleConvert}
        disabled={loading || !videoUrl}
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

export default VideoToBlogConverter;
