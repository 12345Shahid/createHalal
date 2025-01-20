import { Card } from '../common/Card';
import { LoadingSpinner } from '../common/LoadingSpinner';

interface StatsData {
  totalPosts: number;
  totalViews: number;
  totalComments: number;
  averageRating: number;
}

export function DashboardStats() {
  // Implement stats fetching logic
  const loading = false;
  const stats: StatsData = {
    totalPosts: 0,
    totalViews: 0,
    totalComments: 0,
    averageRating: 0,
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card title="Total Posts" value={stats.totalPosts} />
      <Card title="Total Views" value={stats.totalViews} />
      <Card title="Total Comments" value={stats.totalComments} />
      <Card title="Average Rating" value={stats.averageRating.toFixed(1)} />
    </div>
  );
} 