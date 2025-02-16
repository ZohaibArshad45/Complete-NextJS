import React from 'react';
import Link from 'next/link';

const CatchAllRouting = () => {
    return (
        <div className="flex flex-col items-center  min-h-screen bg-gray-100 p-6 text-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">📝 Blog Page</h1>
            <h1 className="text-2xl text-green-600 mb-4">Catch-All Route</h1>
            <p className="text-lg text-gray-700 mb-2">
                Example URL: <code className="bg-gray-200 px-2 py-1 rounded">/blog/post/2/3/2025</code>
            </p>
            <p className="text-gray-600 mb-2">
                To handle **dynamic** routes, we use **catch-all routes** in Next.js.
            </p>
            <p className="text-gray-600 mb-4">
                Create a folder like: <code className="bg-gray-200 px-2 py-1 rounded">/blog/[...post]</code>
            </p>

            {/* Button to test catch-all route */}
            <button className="mt-4 p-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg ">
                <Link href="/catch-all-routing/new/my/4/5/2040">🚀 Test Catch-All Route</Link>
            </button>
        </div>
    );
};

export default CatchAllRouting;