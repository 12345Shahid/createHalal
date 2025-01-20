// /components/blog/PostPreview.tsx
// Preview component for blog posts in lists

import { BlogPost } from '@/types/blog';
import { formatDate } from '@/utils/dateFormatter';
import { UserAvatar } from '../common/UserAvatar';

interface PostPreviewProps {
  post: BlogPost;
  onClick: () => void;
}

export function PostPreview({ post, onClick }: PostPreviewProps) {
  return (
    <article
      onClick={onClick}
      className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <UserAvatar src={post.author.avatar} alt={post.author.name} size="sm" />
          <span className="text-sm text-gray-600">{post.author.name}</span>
        </div>
        <span className="text-sm text-gray-500">
          {formatDate(post.publishedAt)}
        </span>
      </div>
    </article>
  );
} 