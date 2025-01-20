// /services/permissionService.ts
// Service for handling user permissions and roles

import { apiClient } from '@/utils/apiClient';

type Permission = 'create:post' | 'edit:post' | 'delete:post' | 'moderate:comments';
type Role = 'admin' | 'editor' | 'author' | 'user';

interface UserPermissions {
  role: Role;
  permissions: Permission[];
}

export const permissionService = {
  async getUserPermissions(userId: string): Promise<UserPermissions> {
    return apiClient.request(`/permissions/users/${userId}`);
  },

  async updateUserRole(userId: string, role: Role): Promise<void> {
    return apiClient.request(`/permissions/users/${userId}/role`, {
      method: 'PUT',
      body: { role },
    });
  },

  async grantPermission(userId: string, permission: Permission): Promise<void> {
    return apiClient.request(`/permissions/users/${userId}/permissions`, {
      method: 'POST',
      body: { permission },
    });
  },

  async revokePermission(userId: string, permission: Permission): Promise<void> {
    return apiClient.request(`/permissions/users/${userId}/permissions/${permission}`, {
      method: 'DELETE',
    });
  },
}; 