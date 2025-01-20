// /components/blog/MarkdownEditor.tsx
// Markdown editor component for blog posts

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export function MarkdownEditor({
  value,
  onChange,
  placeholder = 'Write your content here...',
  minHeight = '400px',
}: MarkdownEditorProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="border-b bg-gray-50 p-2 flex space-x-2">
        <button className="p-1 hover:bg-gray-200 rounded">Bold</button>
        <button className="p-1 hover:bg-gray-200 rounded">Italic</button>
        <button className="p-1 hover:bg-gray-200 rounded">Link</button>
        <button className="p-1 hover:bg-gray-200 rounded">Image</button>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-4 outline-none"
        style={{ minHeight }}
      />
    </div>
  );
} 