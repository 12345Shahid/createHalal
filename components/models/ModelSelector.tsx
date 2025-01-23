import React, { useState } from 'react';

const models = [
  'GPT-4',
  'GPT-4 Turbo',
  'Claude 2',
  'Google Bard',
  'Llama 2',
  'Falcon',
  'Mistral'
];

export function ModelSelector() {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  return (
    <div>
      <label htmlFor="model-select">Choose a model:</label>
      <select
        id="model-select"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        {models.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>
    </div>
  );
} 