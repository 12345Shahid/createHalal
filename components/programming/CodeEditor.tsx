import React, { useState } from 'react';

export function CodeEditor({ initialCode }: { initialCode: string }) {
  const [code, setCode] = useState(initialCode);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const saveCode = () => {
    // Implement code saving logic
  };

  return (
    <div>
      <h2>Code Editor</h2>
      <textarea
        value={code}
        onChange={handleCodeChange}
        rows={20}
        cols={80}
      />
      <button onClick={saveCode}>Save</button>
    </div>
  );
} 