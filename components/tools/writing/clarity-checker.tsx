import React, { useState } from 'react';
import { Box, Button, TextArea, Text } from '@chakra-ui/react';

interface ClarityCheckerProps {
  text: string;
  onAnalyze: (text: string) => void;
}

export const ClarityChecker: React.FC<ClarityCheckerProps> = ({ text, onAnalyze }) => {
  const [inputText, setInputText] = useState(text);

  const handleAnalyze = () => {
    onAnalyze(inputText);
  };

  return (
    <Box>
      <Text mb={4}>Check your text for clarity and readability</Text>
      <TextArea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your text here..."
        mb={4}
      />
      <Button onClick={handleAnalyze} colorScheme="blue">
        Analyze Clarity
      </Button>
    </Box>
  );
};

export default ClarityChecker;