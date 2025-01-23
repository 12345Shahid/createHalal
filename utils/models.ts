export const getModelList = () => [
  'GPT-4',
  'GPT-4 Turbo',
  'Claude 2',
  'Google Bard',
  'Llama 2',
  'Falcon',
  'Mistral'
];

export const isModelFree = (model: string) => {
  const freeModels = ['GPT-4', 'Google Bard'];
  return freeModels.includes(model);
}; 