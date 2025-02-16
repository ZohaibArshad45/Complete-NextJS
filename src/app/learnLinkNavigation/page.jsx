'use client'
import React from 'react'
import Link from "next/link"
import { useRouter } from "next/navigation";

const LearnLinkNavigation = () => {
    // Code snippets
    let linkTag = `
    import Link from "next/link";
    <Link href={'/'}>🏠 Home</Link>`;

    let routerTag = `
    // First import
    import { useRouter } from "next/navigation";

    const router = useRouter();

    // 1st way:
    <button onClick={() => router.push('/employee')}> Click </button>

    // 2nd way:
    // Make function
    const NavigationLinks = (nav) => {
        router.push(nav);
    };

    <button onClick={() => NavigationLinks('/static-html-page')}> Home</button>`;

    const router = useRouter();

    const NavigationLinks = (nav) => {
        router.push(nav);
    };

    return (
        <div className='flex flex-col items-center justify-center py-10 gap-5 bg-gray-100 min-h-screen px-4'>
            <h1 className="text-2xl font-bold text-blue-700">🚀 Learn Link Navigation</h1>

            {/* =========== Next/Link =========== */}
            <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">✅ 1. Using Link for Client-Side Navigation </p>
                <p className="text-gray-600">📌 next/link is the best way to navigate between pages in Next.js without reloading.</p>
                <p className="text-sm text-gray-500">⚡ Faster than `a` tag because it preloads the page.</p>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition">
                <Link href={'/'}>🏠 Home</Link>
            </button>

            <pre className='bg-gray-800 text-white rounded-xl px-4 py-2 w-full overflow-x-auto'>
                Code:📋 <code>{linkTag}</code>
            </pre>

            {/* ======== useRouter Navigation =========== */}
            <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">✅ 2. Programmatic Navigation with useRouter()</p>
                <p className="text-gray-600">🔹 Use <code>router.push()</code> to navigate dynamically.</p>
            </div>

            <div className="flex gap-4">
                <button onClick={() => router.push('/')} className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition">
                    🏠 Home
                </button>
                <button onClick={() => NavigationLinks('/contact')} className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition">
                    📞 Contact
                </button>
                <button onClick={() => NavigationLinks('/about')} className="bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition">
                    📖 About
                </button>
            </div>

            <p className="text-gray-500 text-sm text-center">
                🔹 <code>router.push("/page")</code> → Navigate to a new page. <br />
                🔹 <code>router.replace("/page")</code> → Navigate without history. <br />
                🔹 <code>router.back()</code> → Go back to the previous page.
            </p>

            <pre className='bg-gray-800 text-white rounded-xl px-4 py-2 w-full overflow-x-auto'>
                Code:📋 <code>{routerTag}</code>
            </pre>

            {/* ======== Query Parameters Navigation =========== */}
            <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">✅ 3. Navigating with Query Parameters</p>
                <p className="text-gray-600">📌 Example: Navigate to <code>/profile?name=Zohaib</code></p>
            </div>
            
            <button className="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition">
                <Link href={{ pathname: "/profile", query: { name: "Zohaib" } }}>👤 Profile</Link>
            </button>
        </div>
    )
}

export default LearnLinkNavigation;
