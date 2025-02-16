import Link from 'next/link';
import React from 'react';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
            <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
            <Link href="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all">
                🔙 Go Back Home
            </Link>
        </div>
    );
};

export default PageNotFound;