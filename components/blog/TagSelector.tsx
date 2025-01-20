// /components/blog/TagSelector.tsx
// Component for selecting and managing blog post tags

interface TagSelectorProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export function TagSelector({ tags, selectedTags, onTagToggle }: TagSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onTagToggle(tag)}
          className={`px-3 py-1 rounded-full text-sm ${
            selectedTags.includes(tag)
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
} 