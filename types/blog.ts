export interface BlogPost {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  tags: string[];
  slug: string;
} 