import React from 'react';

const CatchAll = ({ params }) => {
  const posts = params?.posts || [];

  const code = `'use client'
import React from 'react';

const CatchAll = ({ params }) => {
  const posts = params?.posts || [];

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-center flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">📌 Catch-All Route Page</h1>
      <p className="text-lg text-gray-700 mb-4">🔍 Below are the extracted URL parameters:</p>

      <div className="bg-white p-6 border rounded-lg shadow-md w-full max-w-lg text-left space-y-2">
        <h2>📝 Blog Name: <span className="text-blue-500">{posts[0] || 'N/A'}</span></h2>
        <h2>👤 Blog Owner: <span className="text-blue-500">{posts[1] || 'N/A'}</span></h2>
        <h2>📅 Date: <span className="text-blue-500">{posts[2] || 'N/A'}</span></h2>
        <h2>📆 Month: <span className="text-blue-500">{posts[3] || 'N/A'}</span></h2>
        <h2>📅 Year: <span className="text-blue-500">{posts[4] || 'N/A'}</span></h2>
        <h2>➕ More: <span className="text-blue-500">{posts[5] || 'N/A'}</span></h2>
      </div>
    </div>
  );
};

export default CatchAll;
`;

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-center flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">📌 Catch-All Route Page</h1>
      <p className="text-lg text-gray-700">🔍 Below are the extracted URL parameters:</p>

      <div className="bg-white p-6 border rounded-lg shadow-md w-full max-w-lg text-left space-y-2">
        <h2>📝 <strong>Blog Name:</strong> <span className="text-blue-500">{posts[0] || "N/A"}</span></h2>
        <h2>👤 <strong>Blog Owner:</strong> <span className="text-blue-500">{posts[1] || "N/A"}</span></h2>
        <h2>📅 <strong>Date:</strong> <span className="text-blue-500">{posts[2] || "N/A"}</span></h2>
        <h2>📆 <strong>Month:</strong> <span className="text-blue-500">{posts[3] || "N/A"}</span></h2>
        <h2>📅 <strong>Year:</strong> <span className="text-blue-500">{posts[4] || "N/A"}</span></h2>
        <h2>➕ <strong>More:</strong> <span className="text-blue-500">{posts[5] || "N/A"}</span></h2>
      </div>

      <div className="bg-black text-white p-4 mt-6 w-full max-w-5xl rounded-xl text-left overflow-x-auto whitespace-pre-wrap">
        <h2 className="mb-2 text-lg font-semibold text-yellow-300">📄 Code Used:</h2>
        <code>{code}</code>
      </div>
    </div>
  );
};

export default CatchAll;
