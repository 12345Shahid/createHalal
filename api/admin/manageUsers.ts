import { NextApiRequest, NextApiResponse } from 'next';

let users = [
  { id: '1', name: 'User One', email: 'userone@example.com', blocked: false },
  { id: '2', name: 'User Two', email: 'usertwo@example.com', blocked: false }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ users });
  } else if (req.method === 'POST') {
    const { userId, action } = req.body;
    if (action === 'block') {
      users = users.map(user => user.id === userId ? { ...user, blocked: true } : user);
    } else if (action === 'unblock') {
      users = users.map(user => user.id === userId ? { ...user, blocked: false } : user);
    }
    res.status(200).json({ users });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 