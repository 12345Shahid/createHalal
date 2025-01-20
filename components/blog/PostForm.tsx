// /components/blog/PostForm.tsx
// Form for creating and editing blog posts

import { useState, FormEvent } from 'react';
import { BlogPost } from '@/types/blog';
import { MarkdownEditor } from './MarkdownEditor';
import { TagInput } from '../common/TagInput';

interface PostFormProps {
  initialData?: Partial<BlogPost>;
  onSubmit: (data: Partial<BlogPost>) => Promise<void>;
  isSubmitting?: boolean;
}

export function PostForm({ initialData = {}, onSubmit, isSubmitting }: PostFormProps) {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    content: initialData.content || '',
    tags: initialData.tags || [],
    published: initialData.published || false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <MarkdownEditor
          value={formData.content}
          onChange={(content) => setFormData({ ...formData, content })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tags</label>
        <TagInput
          tags={formData.tags}
          onTagsChange={(tags) => setFormData({ ...formData, tags })}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          checked={formData.published}
          onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
          className="h-4 w-4 text-blue-600 rounded"
        />
        <label className="ml-2 text-sm text-gray-700">Publish immediately</label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {isSubmitting ? 'Saving...' : 'Save Post'}
      </button>
    </form>
  );
} 