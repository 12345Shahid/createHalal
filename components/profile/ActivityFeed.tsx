// /components/profile/ActivityFeed.tsx
// Component for displaying user activity feed

import { formatDate } from '@/utils/dateFormatter';

interface Activity {
  id: string;
  type: 'post' | 'comment' | 'like' | 'follow';
  title: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

interface ActivityFeedProps {
  activities: Activity[];
  onActivityClick?: (activity: Activity) => void;
}

export function ActivityFeed({ activities, onActivityClick }: ActivityFeedProps) {
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'post':
        return '📝';
      case 'comment':
        return '💬';
      case 'like':
        return '❤️';
      case 'follow':
        return '👥';
      default:
        return '📌';
    }
  };

  const getActivityText = (activity: Activity) => {
    switch (activity.type) {
      case 'post':
        return `Published "${activity.title}"`;
      case 'comment':
        return `Commented on "${activity.title}"`;
      case 'like':
        return `Liked "${activity.title}"`;
      case 'follow':
        return `Started following ${activity.title}`;
      default:
        return activity.title;
    }
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          onClick={() => onActivityClick?.(activity)}
          className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <span className="text-2xl">{getActivityIcon(activity.type)}</span>
          <div className="flex-1">
            <p className="text-gray-800">{getActivityText(activity)}</p>
            <p className="text-sm text-gray-500">
              {formatDate(activity.timestamp)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 