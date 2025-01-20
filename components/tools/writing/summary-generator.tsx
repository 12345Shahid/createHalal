import React, { useState } from 'react';
import { Button, TextArea, Card } from '@/components/ui';
import { generateSummary } from '@/lib/api/writing';

interface SummaryGeneratorProps {
  onComplete?: (summary: string) => void;
}

export const SummaryGenerator: React.FC<SummaryGeneratorProps> = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateSummary = async () => {
    try {
      setIsLoading(true);
      const result = await generateSummary(text);
      setSummary(result);
      if (onComplete) {
        onComplete(result);
      }
    } catch (error) {
      console.error('Error generating summary:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold mb-4">Summary Generator</h2>
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text to summarize..."
        className="mb-4"
      />
      <Button 
        onClick={handleGenerateSummary}
        disabled={!text || isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate Summary'}
      </Button>
      {summary && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Generated Summary:</h3>
          <p className="bg-gray-50 p-3 rounded">{summary}</p>
        </div>
      )}
    </Card>
  );
};

export default SummaryGenerator;
