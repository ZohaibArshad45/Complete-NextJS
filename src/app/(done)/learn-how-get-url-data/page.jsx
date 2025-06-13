'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const UrlData = () => {
  let pathname =  usePathname()
    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10 flex flex-col items-center justify-center gap-8">
            <h1 className="text-3xl font-bold text-blue-700 text-center">
                📍 URL Handling in Next.js — Params & Search Params
            </h1>
            
            

            {/* Server Side */}
            <section className="w-full max-w-2xl bg-purple-50 border border-purple-200 rounded-xl p-6 shadow space-y-2">
                <h2 className="text-xl font-semibold text-purple-700">🔹 Server Side</h2>
                <p className="text-gray-700">
                    Inside server components (like <code>app/[id]/page.jsx</code>), use route <strong>params</strong> and <strong>searchParams</strong> from the function argument:
                </p>
                <pre className="bg-gray-800 text-white rounded-xl p-4 text-sm overflow-x-auto whitespace-pre-wrap">
                    {`export default function Page({ params, searchParams }) {
    return (
        <>
            <h1>ID: {params.id}</h1>
            <p>Name: {searchParams.name}</p>
        </>
    );
}`}
                </pre>
            </section>

            {/* Client Side */}
            <section className="w-full max-w-2xl bg-green-50 border border-green-200 rounded-xl p-6 shadow space-y-2">
                <h2 className="text-xl font-semibold text-green-700">🔹 Client Side</h2>
                <h2 className=" text-blue-700">🔹 Curent Pathname = {pathname}</h2>
                <p className="text-gray-700">
                    For client components, use <code className="bg-gray-100 px-1 rounded">usePathname()</code> and <code className="bg-gray-100 px-1 rounded">useSearchParams()</code> from <code>next/navigation</code>.
                </p>
                <Link
                    href="/learn-how-get-url-data/2323?name=zohaib"
                    className="inline-block text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded mt-2 shadow transition"
                >
                    👉 Go to Client Page Example
                </Link>
            </section>


        </div>
    );
};

export default UrlData;
