// /components/blog/RichTextEditor.tsx
// Rich text editor component for blog posts

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export function RichTextEditor({ content, onChange, placeholder }: RichTextEditorProps) {
  return (
    <div className="border rounded-lg">
      <div className="border-b p-2">
        {/* Toolbar implementation */}
      </div>
      <div
        contentEditable
        className="p-4 min-h-[200px]"
        onInput={(e) => onChange(e.currentTarget.textContent || '')}
        placeholder={placeholder}
      />
    </div>
  );
} 