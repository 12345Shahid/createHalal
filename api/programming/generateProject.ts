import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { description, tool } = req.body;
    // Implement project generation logic
    const project = `Generated project for ${tool} with description: ${description}`;
    res.status(200).json({ project });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 