import React, { useState, useEffect } from 'react';

export function ContentManagement() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Fetch content from API
    const fetchContent = async () => {
      const response = await fetch('/api/admin/manageContent');
      const data = await response.json();
      setContent(data.content);
    };
    fetchContent();
  }, []);

  const deleteContent = (contentId: string) => {
    // Implement delete content logic
  };

  return (
    <div>
      <h2>Content Management</h2>
      <ul>
        {content.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => deleteContent(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
} 