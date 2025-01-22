/**
 * Style Check Tool Page Component
 * This component provides a tool for checking and analyzing writing style in blog posts
 */

'use client';

import React from 'react';

const StyleCheckPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Style Check Tool</h1>
      <div className="prose max-w-none">
        <p>Analyze and improve your writing style with our style checking tool.</p>
      </div>
    </div>
  );
};

export default StyleCheckPage;