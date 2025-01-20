import { BlogPost } from '@/types/blog';

interface PostListProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
}

export function PostList({ posts, onPostClick }: PostListProps) {
  return (
    <div className="post-list">
      {/* Implementation */}
    </div>
  );
} 