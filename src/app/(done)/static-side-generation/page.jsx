import React from 'react';
import getDataAPI from '../../../../services/page';
import Link from 'next/link';

const StaticSiteGeneration = async () => {
    const data = await getDataAPI();
        const users = await data


    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* 🔍 Pre-rendering Explanation */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-bold text-blue-700 mb-2">✅ Do Type ki Pre-rendering hoti hain:</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                        <strong>1️⃣ Server Side Rendering (SSR):</strong> Jab user request bhejta hai (jaise button click ya page visit), tabhi HTML banaya jata hai.
                    </li>
                    <li>
                        <strong>2️⃣ Static Site Generation (SSG):</strong> HTML pehlay hi ban jaata hai build time pe (is liye ultra fast + SEO friendly hota hai).
                    </li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                    ⚙️ <strong>SSG</strong> Next.js mein hota hai jab hum <code className="bg-gray-200 px-1 rounded">async</code> server function likhtay hain bina dynamic data ke.
                </p>
            </div>

            {/* 🔗 User Links */}
            <h1 className="text-2xl font-bold text-blue-800 mb-4">📦 Learn Static Site Generation (SSG) with API</h1>

            <div className="space-y-3">
                {data.map((user, i) => (
                    <h2 key={i}>
                        <Link
                            href={`static-side-generation/${user.id}`}
                            className="text-lg text-blue-600 hover:text-pink-700"
                        >
                            🔗 {user.username}
                        </Link>
                    </h2>
                ))}
            </div>
        </div>
    );
};

export default StaticSiteGeneration;
