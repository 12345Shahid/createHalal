import React, { useState } from 'react';

export function NotificationSender() {
  const [message, setMessage] = useState('');

  const sendNotification = () => {
    // Implement send notification logic
  };

  return (
    <div>
      <h2>Send Notifications</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message here"
      />
      <button onClick={sendNotification}>Send</button>
    </div>
  );
} 