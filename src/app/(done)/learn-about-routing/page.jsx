'use client';
import React from 'react';
import Link from 'next/link';

const RoutingInfo = () => {
    return (
        <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
            <div className="max-w-5xl mx-auto space-y-10">
                <h1 className="text-4xl font-bold text-center text-indigo-700">
                    🌐 Routing in Next.js (App Router)
                </h1>

                {/* File-Based Routing */}
                <section className="p-6 md:p-8 bg-indigo-50 rounded-2xl border border-indigo-200 shadow-sm space-y-4">
                    <h2 className="text-2xl font-semibold text-indigo-700">📁 File-based Routing</h2>
                    <p className="text-gray-700">
                        Next.js automatically creates routes based on your file structure under the <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-indigo-700">app/</code> directory.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><code>app/page.tsx</code> → <code>/</code> (Home route)</li>
                        <li><code>app/about/page.tsx</code> → <code>/about</code></li>
                        <li><code>app/contact/page.tsx</code> → <code>/contact</code></li>
                    </ul>
                </section>

                {/* Dynamic Routing */}
                <section className="p-6 md:p-8 bg-yellow-50 rounded-2xl border border-yellow-200 shadow-sm space-y-4">
                    <h2 className="text-2xl font-semibold text-yellow-700">🔧 Dynamic Routing</h2>
                    <p className="text-gray-700">
                        Aap dynamic parameters ke liye brackets use karte hain. For example:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><code>app/blog/[slug]/page.tsx</code> → <code>/blog/post-title</code></li>
                        <li><code>app/user/[id]/page.tsx</code> → <code>/user/123</code></li>
                    </ul>
                    <p className="text-gray-700">
                        Is tarah aap dynamic routes handle kar sakte ho. Use <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-yellow-700">params</code> to access values.
                    </p>
                </section>

                {/* Link Navigation */}
                <section className="p-6 md:p-8 bg-green-50 rounded-2xl border border-green-200 shadow-sm space-y-4">
                    <h2 className="text-2xl font-semibold text-green-700">🔗 Link Navigation</h2>
                    <p className="text-gray-700">
                        Internal routing ke liye <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-green-700">Link</code> component use hota hai from <code>next/link</code>.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <Link href="/learn-link-navigation" className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition">
                            About Page
                        </Link>
                        <Link href="/learn-link-navigation" className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition">
                            Contact Page
                        </Link>
                    </div>
                </section>

                {/* Conclusion */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-700">
                        ✅ <strong>Next.js App Router</strong> makes routing easy, powerful, and file-driven. You don’t need extra config — just create files and Next.js handles the rest!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RoutingInfo;
