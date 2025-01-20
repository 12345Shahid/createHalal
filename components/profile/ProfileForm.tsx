import { useState } from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { useAuthContext } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';

interface ProfileFormData {
  displayName: string;
  email: string;
  bio: string;
}

export function ProfileForm() {
  const { user } = useAuthContext();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ProfileFormData>({
    displayName: user?.displayName || '',
    email: user?.email || '',
    bio: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Implement profile update logic
      addToast('Profile updated successfully', 'success');
    } catch (error) {
      addToast('Failed to update profile', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Display Name"
        value={formData.displayName}
        onChange={(e) => setFormData(prev => ({ ...prev, displayName: e.target.value }))}
      />
      <Input
        label="Email"
        type="email"
        value={formData.email}
        disabled
      />
      <Input
        label="Bio"
        as="textarea"
        value={formData.bio}
        onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
      />
      <Button type="submit" loading={loading}>
        Update Profile
      </Button>
    </form>
  );
} 