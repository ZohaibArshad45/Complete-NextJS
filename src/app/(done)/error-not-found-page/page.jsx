'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const PageNot = () => {
    const router = useRouter();

    const linkHandle = (nav) => {
        router.push(nav);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-red-600 text-center">
                🚨 Custom 404 Page in Next.js
            </h1>

            {/* Instructions */}
            <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-2xl space-y-3 text-left">
                <h2 className="text-xl font-semibold text-gray-800">📌 Steps to Create 404 Page</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>📁 Inside <code>app/</code>, create a file named <strong>not-found.tsx</strong> or <strong>not-found.jsx</strong>.</li>
                    <li>✅ This will be used as the default fallback for undefined routes.</li>
                    <li>🎨 You can fully customize the 404 design and content.</li>
                </ul>

                {/* Button to simulate 404 */}
                <button
                    onClick={() => linkHandle('/this-route-does-not-exist')}
                    className="mt-4 bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-lg transition shadow"
                >
                    🔍 Test 404 Page
                </button>
            </div>

            {/* Route-based Error Handling */}
            <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-2xl space-y-3 text-left">
                <h2 className="text-xl font-semibold text-blue-700">⚠️ Specific Route Error Page</h2>
                <p className="text-gray-700">
                    If you want to show custom messages for certain paths like <code>/error/anything</code>, use a <strong>catch-all</strong> route.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>📁 Create a folder: <code>app/[...errorPage]/</code></li>
                    <li>📝 Inside it, create <strong>page.jsx</strong></li>
                    <li>📝 Customize it to display an error message.</li>
                    <li>✅ Use <code>params.errorPage</code> to show the dynamic segments</li>
                </ul>
            </div>
        </div>
    );
};

export default PageNot;
