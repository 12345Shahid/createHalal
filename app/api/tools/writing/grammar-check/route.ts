// /app/api/tools/writing/grammar-check/route.ts
// API route for grammar checking

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: 'Text is required' });
      }
      // TODO: Implement grammar checking logic
      res.status(200).json({ message: 'Grammar check completed.' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}