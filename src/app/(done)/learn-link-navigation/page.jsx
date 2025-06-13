'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LearnLinkNavigation = () => {
    const router = useRouter();

    // Reusable navigation function
    const navigateTo = (path) => {
        router.push(path);
    };

    // Code snippets (for UI display)
    const linkTag = `
import Link from "next/link";
<Link href="/">🏠 Home</Link>
`;

    const routerTag = `
'use client';
import { useRouter } from "next/navigation";
const router = useRouter();

// Method 1
<button onClick={() => router.push('/employee')}>Click</button>

// Method 2
const navigateTo = (path) => {
    router.push(path);
};
<button onClick={() => navigateTo('/static-html-page')}>Go</button>
`;

    const queryParameters = `
<Link href={{ pathname: '/profile', query: { name: 'Zohaib' } }}>
    👤 Profile
</Link>
`;

    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 gap-10 bg-gray-100 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 text-center">
                🚀 Learn Link & Navigation in Next.js
            </h1>

            {/* 1. Link Navigation */}
            <section className="text-center space-y-2">
                <p className="text-xl font-semibold text-gray-800">✅ 1. Link Navigation</p>
                <p className="text-gray-600">
                    📌 <code>next/link</code> allows fast client-side navigation between routes.
                </p>
                <p className="text-sm text-gray-500">⚡ Faster than &lt;a&gt; because it preloads routes automatically.</p>

                <Link
                    href="/"
                    className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md shadow transition"
                >
                    🏠 Home
                </Link>

                <pre className="bg-gray-800 text-white rounded-xl px-4 py-3 text-left overflow-x-auto whitespace-pre-wrap">
                    <code>{linkTag}</code>
                </pre>
            </section>

            {/* 2. useRouter Navigation */}
            <section className="text-center space-y-2">
                <p className="text-xl font-semibold text-gray-800">✅ 2. Programmatic Navigation using <code>useRouter()</code></p>
                <p className="text-gray-600">🔹 Dynamically navigate using functions or user events.</p>
                <p className="text-gray-600">🔹 It works only on the client side — so <code>'use client'</code> is required.</p>

                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <button onClick={() => router.push('/')} className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded-md shadow transition">
                        🏠 Home
                    </button>
                    <button onClick={() => navigateTo('/contact')} className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded-md shadow transition">
                        📞 Contact
                    </button>
                    <button onClick={() => navigateTo('/about')} className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded-md shadow transition">
                        📖 About
                    </button>
                </div>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    🔹 <code>router.push("/page")</code> → Navigate to a new page<br />
                    🔹 <code>router.replace("/page")</code> → Navigate without saving history<br />
                    🔹 <code>router.back()</code> → Go back to previous page
                </p>

                <pre className="bg-gray-800 text-white rounded-xl px-4 py-3 text-left overflow-x-auto whitespace-pre-wrap">
                    <code>{routerTag}</code>
                </pre>
            </section>

            {/* 3. Query Params Navigation */}
            <section className="text-center space-y-2">
                <p className="text-xl font-semibold text-gray-800">✅ 3. Navigation with Query Parameters</p>
                <p className="text-gray-600">
                    📌 Example: Navigate to <code>/profile?name=Zohaib</code>
                </p>

                <Link
                    href={{ pathname: '/profile', query: { name: 'Zohaib' } }}
                    className="inline-block bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded-md shadow transition"
                >
                    👤 Profile
                </Link>

                <pre className="bg-gray-800 text-white rounded-xl px-4 py-3 text-left overflow-x-auto whitespace-pre-wrap">
                    <code>{queryParameters}</code>
                </pre>
            </section>
        </div>
    );
};

export default LearnLinkNavigation;
