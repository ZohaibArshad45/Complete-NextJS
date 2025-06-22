'use client' // ✅ Client-side component required for accessing public env vars

import React from 'react';

const EnvironmentVariables = () => {
    const publicApiUrl = process.env.NEXT_PUBLIC_API_URL; // ✅ Only NEXT_PUBLIC_ prefixed env vars are accessible here

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-600">🌍 Environment Variables in Next.js</h1>
            <p className="text-gray-700">✅ This component demonstrates how to use environment variables in client-side.</p>

            <br />

            <h2 className="text-lg font-semibold">🚀 Public API URL:</h2>
            <p className="text-green-600 font-mono">{publicApiUrl || '⚠️ Environment variable not found'}</p>

            <br />
            <pre className="bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto">
                <code>
{`// 1️⃣ .env.local file (root of your project)
NEXT_PUBLIC_API_URL=https://api.example.com

// 2️⃣ Accessing in a Client Component
const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
`}
                </code>
            </pre>

            <div className="mt-4 p-4 bg-yellow-100 rounded-lg border border-yellow-300 text-yellow-900">
                <h3 className="font-semibold">📌 Important Notes:</h3>
                <ul className="list-disc list-inside text-sm">
                    <li>Only environment variables starting with <code>NEXT_PUBLIC_</code> are accessible in client-side components.</li>
                    <li>Restart your server after changing any <code>.env.local</code> values.</li>
                    <li>Never expose sensitive variables (like API keys without auth) to client side.</li>
                </ul>
            </div>
        </div>
    );
};

export default EnvironmentVariables;
