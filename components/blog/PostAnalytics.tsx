// /components/blog/PostAnalytics.tsx
// Component for displaying post analytics

interface PostAnalyticsProps {
  views: number;
  likes: number;
  comments: number;
  shares: number;
}

export function PostAnalytics({ views, likes, comments, shares }: PostAnalyticsProps) {
  const stats = [
    { label: 'Views', value: views },
    { label: 'Likes', value: likes },
    { label: 'Comments', value: comments },
    { label: 'Shares', value: shares },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map(({ label, value }) => (
        <div key={label} className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-2xl font-bold">{value.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
} 