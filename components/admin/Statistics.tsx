import React, { useState, useEffect } from 'react';

export function Statistics() {
  const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0 });

  useEffect(() => {
    // Fetch statistics from API
    const fetchStatistics = async () => {
      const response = await fetch('/api/admin/getStatistics');
      const data = await response.json();
      setStats(data);
    };
    fetchStatistics();
  }, []);

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Users: {stats.totalUsers}</p>
      <p>Active Users: {stats.activeUsers}</p>
    </div>
  );
} 