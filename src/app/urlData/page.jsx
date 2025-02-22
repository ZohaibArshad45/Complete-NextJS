import React from 'react';
import Link from 'next/link';

const UrlData = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-600">📍 Params & URL Handling</h1>

            {/* Client Side */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-green-600">🔹 Client Side</h2>
                <p>We use <code>usePathname</code> and <code>useSearchParams</code> on the client side.</p>
                <Link href="/urlData/2323?name=zohaib" className="text-blue-500 underline">
                    Go to Client Page
                </Link>
            </div>

            {/* Server Side */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-purple-600">🔹 Server Side</h2>
                <p>We use <code>Params</code> and <code>SearchParams</code> on the server side.</p>
            </div>
        </div>
    );
};

export default UrlData;
