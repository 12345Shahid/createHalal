// /components/blog/CommentList.tsx
// Component for displaying a list of comments

import { Comment } from './Comment';

interface CommentData {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  createdAt: Date;
}

interface CommentListProps {
  comments: CommentData[];
  onDeleteComment?: (id: string) => void;
}

export function CommentList({ comments, onDeleteComment }: CommentListProps) {
  return (
    <div className="space-y-4">
      {comments.map(comment => (
        <Comment
          key={comment.id}
          {...comment}
          onDelete={onDeleteComment ? () => onDeleteComment(comment.id) : undefined}
        />
      ))}
    </div>
  );
} 