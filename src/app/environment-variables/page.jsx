'use client' // ✅ Since it's a client-side component
import React from 'react';

const EnvironmentVariables = () => {
  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL; // ✅ Access public variable

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600">🌍 Environment Variables in Next.js</h1>
      <p className="text-gray-700">✅ This component demonstrates how to use environment variables.</p>

      <br />

      <h2 className="text-lg font-semibold">🚀 Public API URL:</h2>
      <p className="text-green-600 font-mono">{publicApiUrl || 'Environment variable not found'}</p>

      <br />
      <pre className="bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto">
        <code>
{`//1️⃣ Create a .env.local file (in the root of your project)
//  .env.local file
NEXT_PUBLIC_API_URL=https://api.example.com

// Accessing in Client Component
const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;`}
        </code>
      </pre>
    </div>
  );
};

export default EnvironmentVariables;
