export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  role: 'user' | 'admin';
  createdAt: Date;
  lastLogin: Date;
} 