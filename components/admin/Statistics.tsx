import React from 'react';
import { useAdmin } from '@/hooks/use-admin';

const Statistics = () => {
  const { stats } = useAdmin();

  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Total Users: {stats.totalUsers}</li>
        <li>Active Users (Daily): {stats.activeUsersDaily}</li>
        <li>Active Users (Weekly): {stats.activeUsersWeekly}</li>
        <li>Active Users (Monthly): {stats.activeUsersMonthly}</li>
        <li>Total Generated Content: {stats.totalGeneratedContent}</li>
        <li>Most Used Models: {stats.mostUsedModels}</li>
        <li>Average Response Times: {stats.averageResponseTimes}</li>
        <li>Total Blocked Users: {stats.totalBlockedUsers}</li>
        <li>Total Credits Assigned: {stats.totalCreditsAssigned}</li>
      </ul>
    </div>
  );
};

export default Statistics;