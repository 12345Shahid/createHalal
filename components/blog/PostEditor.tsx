import { BlogPost } from '@/types/blog';

interface PostEditorProps {
  post?: BlogPost;
  onSave: (post: Partial<BlogPost>) => Promise<void>;
}

export function PostEditor({ post, onSave }: PostEditorProps) {
  return (
    <div className="post-editor">
      {/* Implementation */}
    </div>
  );
} 