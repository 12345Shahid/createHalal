import { NextApiRequest, NextApiResponse } from 'next';

let admins = [
  { id: '1', email: 'shahidhasanpollob@gmail.com', role: 'prime-admin' },
  { id: '2', email: 's.hasan.p.369@gmail.com', role: 'prime-admin' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ admins });
  } else if (req.method === 'POST') {
    const { email, password, role } = req.body;
    const newAdmin = { id: String(admins.length + 1), email, role };
    admins.push(newAdmin);
    res.status(201).json({ admins });
  } else if (req.method === 'DELETE') {
    const { adminId } = req.body;
    admins = admins.filter(admin => admin.id !== adminId || admin.role === 'prime-admin');
    res.status(200).json({ admins });
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 