// /hooks/useBlogPosts.ts
// Hook for managing blog posts data and operations

import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import { blogService } from '@/services/blogService';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      const data = await blogService.getPosts();
      setPosts(data);
    } catch (err) {
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  }

  return { posts, loading, error, loadPosts };
} 