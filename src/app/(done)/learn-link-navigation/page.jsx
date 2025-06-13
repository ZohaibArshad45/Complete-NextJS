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

    // Code snippets (display only)
    const linkTag = `
import Link from "next/link";
<Link href={'/'}>🏠 Home</Link>
`;

    const routerTag = `
import { useRouter } from "next/navigation";
const router = useRouter();

// 1st way:
<button onClick={() => router.push('/employee')}> Click </button>

// 2nd way:
const navigateTo = (path) => {
    router.push(path);
};
<button onClick={() => navigateTo('/static-html-page')}>Go</button>
`;


const QueryParameters = `
<Link href={{ pathname: '/profile', query: { name: 'Zohaib' } }}>
👤 Profile
</Link>
`

    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 gap-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-blue-700 text-center">🚀 Learn Link Navigation in Next.js</h1>

            {/* Using Link */}
            <div className="text-center space-y-2">
                <p className="text-xl font-semibold text-gray-800">✅ 1. Using Link for Client-Side Navigation</p>
                <p className="text-gray-600">📌 <code>next/link</code> allows fast navigation between pages.</p>
                <p className="text-sm text-gray-500">⚡ Faster than &lt;a&gt; because it preloads the route.</p>
                <div className="mt-2">
                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md shadow transition">
                        <Link href="/">🏠 Home</Link>
                    </button>
                </div>
                <pre className="bg-gray-800 text-white rounded-xl px-4 py-2 w-full overflow-x-auto text-left">
                    Code:📋 <code>{linkTag}</code>
                </pre>
            </div>

            {/* Using useRouter */}
            <div className="text-center space-y-2">
                <p className="text-xl font-semibold text-gray-800">✅ 2. Programmatic Navigation with useRouter()</p>
                <p className="text-gray-600">🔹 <code>router.push()</code> is used to navigate via functions or events.</p>
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
                <p className="text-sm text-gray-500 mt-2">
                    🔹 <code>router.push("/page")</code> → Navigate to a new page <br />
                    🔹 <code>router.replace("/page")</code> → Navigate without saving history <br />
                    🔹 <code>router.back()</code> → Go back to previous page
                </p>
                <pre className="bg-gray-800 text-white rounded-xl px-4 py-2 w-full overflow-x-auto text-left">
                    Code:📋 <code>{routerTag}</code>
                </pre>
            </div>

            {/* Navigating with Query Params */}
            <div className="text-center space-y-2">
                <p className="text-xl font-semibold text-gray-800">✅ 3. Navigating with Query Parameters</p>
                <p className="text-gray-600">📌 Example: Go to <code>/profile?name=Zohaib</code></p>
                <button className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded-md shadow transition">
                    <Link href={{ pathname: '/profile', query: { name: 'Zohaib' } }}>👤 Profile</Link>
                </button>
                <pre className="bg-gray-800 text-white rounded-xl px-4 py-2 w-full overflow-x-auto text-left">
                    Code:📋 <code>{QueryParameters}</code>
                </pre>

            </div>
        </div>
    );
};

export default LearnLinkNavigation;
