// /components/profile/UserProfile.tsx
// Component for displaying user profile information

import { UserProfile } from '@/types/user';
import { UserAvatar } from '../common/UserAvatar';

interface UserProfileProps {
  user: UserProfile;
  onEdit?: () => void;
}

export function UserProfile({ user, onEdit }: UserProfileProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center space-x-4">
        <UserAvatar src={user.avatar} alt={user.name} size="lg" />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        {onEdit && (
          <button
            onClick={onEdit}
            className="ml-auto px-4 py-2 bg-blue-500 text-white rounded"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
} 