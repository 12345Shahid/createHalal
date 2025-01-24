import React from 'react';
import { UserManagement } from './UserManagement';
import { ContentManagement } from './ContentManagement';
import { NotificationSender } from './NotificationSender';
import { Statistics } from './Statistics';

export function Dashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserManagement />
      <ContentManagement />
      <NotificationSender />
      <Statistics />
    </div>
  );
} 