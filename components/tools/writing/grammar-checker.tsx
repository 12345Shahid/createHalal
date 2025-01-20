// /components/tools/writing/grammar-checker.tsx
// Component for grammar checking functionality

import React, { useState } from 'react';
import { Box, Button, TextArea, Text } from '@/components/ui';

interface GrammarCheckerProps {
  text?: string;
  onCheck?: (text: string) => void;
}

export const GrammarChecker: React.FC<GrammarCheckerProps> = ({ 
  text = '', 
  onCheck 
}) => {
  const [inputText, setInputText] = useState(text);
  const [results, setResults] = useState<string[]>([]);

  const handleCheck = () => {
    // Grammar checking logic will go here
    if (onCheck) {
      onCheck(inputText);
    }
  };

  return (
    <Box className="grammar-checker">
      <Text variant="h2">Grammar Checker</Text>
      <TextArea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to check grammar..."
      />
      <Button onClick={handleCheck}>
        Check Grammar
      </Button>
      {results.length > 0 && (
        <Box className="results">
          {results.map((result, index) => (
            <Text key={index}>{result}</Text>
          ))}
        </Box>
      )}
    </Box>
  );
};