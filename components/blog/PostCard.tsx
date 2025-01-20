// /components/blog/PostCard.tsx
// Card component for displaying blog post previews

import { BlogPost } from '@/types/blog';
import { formatDate } from '@/utils/dateFormatter';

interface PostCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

export function PostCard({ post, onClick }: PostCardProps) {
  return (
    <article
      className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onClick(post)}
    >
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.content.substring(0, 150)}...</p>
      <div className="text-sm text-gray-500">
        {formatDate(post.createdAt)}
      </div>
    </article>
  );
} 