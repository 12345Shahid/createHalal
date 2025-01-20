import React, { useState } from 'react';

interface WordCounterProps {
  placeholder?: string;
}

export const WordCounter: React.FC<WordCounterProps> = ({ placeholder = 'Type or paste your text here...' }) => {
  const [text, setText] = useState('');

  const getWordCount = (str: string): number => {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const getCharacterCount = (str: string): number => {
    return str.length;
  };

  return (
    <div className="word-counter-container">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        className="w-full min-h-[200px] p-4 border rounded-md"
      />
      <div className="mt-4 flex gap-4">
        <div>Words: {getWordCount(text)}</div>
        <div>Characters: {getCharacterCount(text)}</div>
      </div>
    </div>
  );
};

export default WordCounter;
