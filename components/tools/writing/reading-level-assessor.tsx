import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface ReadingLevelAssessorProps {
  onAnalyze?: (text: string) => void;
}

const ReadingLevelAssessor: React.FC<ReadingLevelAssessorProps> = ({ onAnalyze }) => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleAnalyze = () => {
    // TODO: Implement reading level analysis logic
    if (onAnalyze) {
      onAnalyze(inputText);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Reading Level Assessor
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your text to analyze reading level..."
        sx={{ mb: 2 }}
      />
      <Button 
        variant="contained" 
        onClick={handleAnalyze}
        disabled={!inputText}
      >
        Analyze Reading Level
      </Button>
      {result && (
        <Typography sx={{ mt: 2 }}>
          Reading Level: {result}
        </Typography>
      )}
    </Box>
  );
};

export default ReadingLevelAssessor;
