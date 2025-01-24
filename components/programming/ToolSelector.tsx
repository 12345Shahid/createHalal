import React, { useState } from 'react';

const tools = [
  'Mobile App Development',
  'Cloud Architecture',
  'DevOps Engineering'
];

export function ToolSelector() {
  const [selectedTool, setSelectedTool] = useState(tools[0]);

  return (
    <div>
      <label htmlFor="tool-select">Choose a tool:</label>
      <select
        id="tool-select"
        value={selectedTool}
        onChange={(e) => setSelectedTool(e.target.value)}
      >
        {tools.map((tool) => (
          <option key={tool} value={tool}>
            {tool}
          </option>
        ))}
      </select>
    </div>
  );
} 