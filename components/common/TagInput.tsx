// /components/common/TagInput.tsx
// Component for inputting and managing tags

import { useState, KeyboardEvent } from 'react';

interface TagInputProps {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  placeholder?: string;
  maxTags?: number;
}

export function TagInput({ 
  tags, 
  onTagsChange, 
  placeholder = 'Add tags...', 
  maxTags = 10 
}: TagInputProps) {
  const [input, setInput] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const newTag = input.trim();
      if (newTag && !tags.includes(newTag) && tags.length < maxTags) {
        onTagsChange([...tags, newTag]);
        setInput('');
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    onTagsChange(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="border rounded-lg p-2">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map(tag => (
          <span 
            key={tag} 
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full outline-none"
      />
    </div>
  );
} 