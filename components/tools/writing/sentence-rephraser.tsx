import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface SentenceRephraserProps {
  onSubmit?: (text: string) => void;
}

export const SentenceRephraser: React.FC<SentenceRephraserProps> = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleRephrase = async () => {
    try {
      // TODO: Implement rephrasing logic
      const rephrased = inputText; // Placeholder
      setOutputText(rephrased);
      if (onSubmit) onSubmit(rephrased);
    } catch (error) {
      console.error('Error rephrasing sentence:', error);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Sentence Rephraser
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your sentence to rephrase..."
        sx={{ mb: 2 }}
      />
      <Button 
        variant="contained" 
        onClick={handleRephrase}
        disabled={!inputText}
      >
        Rephrase
      </Button>
      {outputText && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Rephrased Result:
          </Typography>
          <Typography>{outputText}</Typography>
        </Box>
      )}
    </Box>
  );
};
