import { useState, useEffect } from 'react';
import { fetchModelData } from '@/services/modelService';

export const useModel = (initialModel: string) => {
  const [model, setModel] = useState(initialModel);
  const [modelData, setModelData] = useState<string | null>(null);

  useEffect(() => {
    const loadModelData = async () => {
      const data = await fetchModelData(model);
      setModelData(data);
    };
    loadModelData();
  }, [model]);

  return { model, setModel, modelData };
}; 