import React, { useState } from 'react';
import ModelSelector from '@/components/ui/model-selector';
import { models } from '@/lib/models';

const G4FModels = () => {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  return (
    <div>
      <h2>Select Your AI Model</h2>
      <ModelSelector models={models} onSelect={setSelectedModel} />
      <div>
        <h3>Selected Model: {selectedModel.name}</h3>
        <p>{selectedModel.description}</p>
      </div>
    </div>
  );
};

export default G4FModels;
