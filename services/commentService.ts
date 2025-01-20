// /services/commentService.ts
// Service for handling blog comments

import { apiClient } from '@/utils/apiClient';

interface Comment {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  createdAt: Date;
}

export const commentService = {
  async getComments(postId: string): Promise<Comment[]> {
    return apiClient.request(`/posts/${postId}/comments`);
  },

  async createComment(postId: string, content: string): Promise<Comment> {
    return apiClient.request(`/posts/${postId}/comments`, {
      method: 'POST',
      body: { content },
    });
  },

  async deleteComment(postId: string, commentId: string): Promise<void> {
    return apiClient.request(`/posts/${postId}/comments/${commentId}`, {
      method: 'DELETE',
    });
  },
}; 