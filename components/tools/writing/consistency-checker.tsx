import React from 'react';
import { Box, Typography } from '@mui/material';

interface ConsistencyCheckerProps {
  text: string;
}

const ConsistencyChecker: React.FC<ConsistencyCheckerProps> = ({ text }) => {
  return (
    <Box>
      <Typography variant="h5" component="h2">
        Consistency Checker
      </Typography>
      <Box sx={{ mt: 2 }}>
        {/* Tool implementation will go here */}
        <Typography>
          Analyze your text for consistent terminology, style, and tone
        </Typography>
      </Box>
    </Box>
  );
};

export default ConsistencyChecker;
