import React, { useState } from 'react';
import { Card, Button, TextArea } from '@/components/ui';
import { analyzeTone } from '@/lib/writing/tone';

interface ToneAnalysisResult {
  tone: string;
  confidence: number;
  suggestions: string[];
}

export const ToneAnalyzer: React.FC = () => {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState<ToneAnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    const result = await analyzeTone(text);
    setAnalysis(result);
  };

  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold mb-4">Tone Analyzer</h2>
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to analyze its tone..."
        className="mb-4"
      />
      <Button onClick={handleAnalyze}>Analyze Tone</Button>
      
      {analysis && (
        <div className="mt-4">
          <p>Detected Tone: {analysis.tone}</p>
          <p>Confidence: {analysis.confidence}%</p>
          <div className="mt-2">
            <h3 className="font-semibold">Suggestions:</h3>
            <ul className="list-disc pl-4">
              {analysis.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ToneAnalyzer;
