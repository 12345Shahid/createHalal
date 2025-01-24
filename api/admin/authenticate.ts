import { NextApiRequest, NextApiResponse } from 'next';

const primeAdmins = [
  { email: 'shahidhasanpollob@gmail.com', password: '3xs4v7788' },
  { email: 's.hasan.p.369@gmail.com', password: '3gigi7788' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const isPrimeAdmin = primeAdmins.some(admin => admin.email === email && admin.password === password);

    if (isPrimeAdmin) {
      return res.status(200).json({ role: 'prime-admin' });
    }

    // Check for normal admin logic here
    // For now, assume all other users are normal users
    return res.status(200).json({ role: 'user' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 