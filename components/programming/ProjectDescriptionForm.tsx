import React, { useState } from 'react';

export function ProjectDescriptionForm() {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement project description submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="project-description">Project Description:</label>
      <textarea
        id="project-description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe your project here"
      />
      <button type="submit">Submit</button>
    </form>
  );
} 