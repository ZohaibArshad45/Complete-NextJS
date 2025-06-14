import React from 'react';
import Link from 'next/link';

const CatchAllRouting = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center space-y-4">
            <h1 className="text-4xl font-bold text-blue-600">📝 Blog Page</h1>
            <h2 className="text-2xl text-green-600">Catch-All Route</h2>

            <p className="text-lg text-gray-700">
                🔗 Example URL:{" "}
                <code className="bg-gray-200 px-2 py-1 rounded">/learn-catch-all-routing/new/my/4/5/2040</code>
            </p>

            <p className="text-gray-600 max-w-xl">
                ✅ Catch-all routes in <strong>Next.js</strong> let you capture multiple segments in the URL using a single file.
            </p>

            <p className="text-gray-600 max-w-xl">
                📁 To create a catch-all route, use folder like:{" "}
                <code className="bg-gray-200 px-2 py-1 rounded">app/learn-catch-all-routing/[...post]/page.jsx</code>
            </p>

            <Link
                href="/learn-catch-all-routing/new/my/4/5/2040"
                className="mt-4 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition shadow-md"
            >
                🚀 Test Catch-All Route
            </Link>
        </div>
    );
};

export default CatchAllRouting;
