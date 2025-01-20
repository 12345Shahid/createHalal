// /components/blog/PostHeader.tsx
// Header component for blog posts

import { UserAvatar } from '../common/UserAvatar';
import { formatDate } from '@/utils/dateFormatter';

interface PostHeaderProps {
  title: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: Date;
  readTime: number;
}

export function PostHeader({ title, author, date, readTime }: PostHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="flex items-center space-x-4">
        <UserAvatar src={author.avatar} alt={author.name} size="sm" />
        <div>
          <p className="font-medium">{author.name}</p>
          <div className="text-sm text-gray-500">
            <span>{formatDate(date)}</span>
            <span className="mx-2">·</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </header>
  );
} 