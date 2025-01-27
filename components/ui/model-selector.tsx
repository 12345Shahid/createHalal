import React from 'react';

const ModelSelector = ({ models, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(models[e.target.value])}>
      {models.map((model, index) => (
        <option key={model.name} value={index}>
          {model.name}
        </option>
      ))}
    </select>
  );
};

export default ModelSelector;
