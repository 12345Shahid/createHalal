import React, { useState } from 'react';
import { Button, TextArea, Card } from '@/components/ui';
import { extractKeywords } from '@/lib/writing/keyword-utils';

interface KeywordExtractorProps {
  text?: string;
  onExtract?: (keywords: string[]) => void;
}

export const KeywordExtractor: React.FC<KeywordExtractorProps> = ({
  text = '',
  onExtract,
}) => {
  const [input, setInput] = useState(text);
  const [keywords, setKeywords] = useState<string[]>([]);

  const handleExtract = async () => {
    const extractedKeywords = await extractKeywords(input);
    setKeywords(extractedKeywords);
    if (onExtract) {
      onExtract(extractedKeywords);
    }
  };

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Keyword Extractor</h3>
      <TextArea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your text to extract keywords..."
        rows={6}
        className="mb-4"
      />
      <Button onClick={handleExtract}>Extract Keywords</Button>
      {keywords.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium mb-2">Extracted Keywords:</h4>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-gray-100 px-2 py-1 rounded-md text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};
