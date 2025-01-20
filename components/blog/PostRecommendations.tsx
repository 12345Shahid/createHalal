// /components/blog/PostRecommendations.tsx
// Component for displaying recommended blog posts

import { BlogPost } from '@/types/blog';
import { PostPreview } from './PostPreview';

interface PostRecommendationsProps {
  currentPostId: string;
  recommendations: BlogPost[];
  onPostClick: (post: BlogPost) => void;
}

export function PostRecommendations({
  currentPostId,
  recommendations,
  onPostClick,
}: PostRecommendationsProps) {
  const filteredRecommendations = recommendations
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  if (filteredRecommendations.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Recommended Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredRecommendations.map(post => (
          <PostPreview
            key={post.id}
            post={post}
            onClick={() => onPostClick(post)}
          />
        ))}
      </div>
    </div>
  );
} 