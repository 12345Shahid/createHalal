// /components/blog/Comment.tsx
// Component for displaying individual blog comments

import { UserAvatar } from '../common/UserAvatar';
import { formatDate } from '@/utils/dateFormatter';

interface CommentProps {
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  createdAt: Date;
  onDelete?: () => void;
}

export function Comment({ author, content, createdAt, onDelete }: CommentProps) {
  return (
    <div className="flex space-x-4 p-4 border-b">
      <UserAvatar src={author.avatar} alt={author.name} size="sm" />
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold">{author.name}</span>
          <span className="text-sm text-gray-500">{formatDate(createdAt)}</span>
        </div>
        <p className="text-gray-700">{content}</p>
      </div>
      {onDelete && (
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          Delete
        </button>
      )}
    </div>
  );
} 