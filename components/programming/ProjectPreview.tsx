import React from 'react';

export function ProjectPreview({ project }: { project: string }) {
  return (
    <div>
      <h2>Project Preview</h2>
      <pre>{project}</pre>
    </div>
  );
} 