import React from 'react';
import { ModelSelector } from '@/components/models/ModelSelector';
import { ModelCategory } from '@/components/models/ModelCategory';
import { ModelProvider, useModelContext } from '@/contexts/ModelContext';

const ModelsPage = () => {
  const { model, setModel } = useModelContext();

  return (
    <div>
      <h1>Model Selection</h1>
      <ModelCategory />
      <ModelSelector />
      <p>Selected Model: {model}</p>
    </div>
  );
};

const ModelsPageWrapper = () => (
  <ModelProvider>
    <ModelsPage />
  </ModelProvider>
);

export default ModelsPageWrapper; 