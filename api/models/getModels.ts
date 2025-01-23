import { NextApiRequest, NextApiResponse } from 'next';
import { getModelList } from '@/utils/models';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const models = getModelList();
    res.status(200).json({ models });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 