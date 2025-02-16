import React from 'react';

const ReactVsNext = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">React vs Next.js</h1>

            <div className="space-y-4">
                <div>
                    <h2 className="text-xl font-semibold">1️⃣ Architecture</h2>
                    <p><strong>React.js:</strong> Frontend library for building UI components.</p>
                    <p><strong>Next.js:</strong> Full-stack framework with frontend & backend capabilities.</p>
                </div>
                <hr />

                <div>
                    <h2 className="text-xl font-semibold">2️⃣ Rendering</h2>
                    <p><strong>React.js:</strong> Only supports Client-Side Rendering (CSR).</p>
                    <p><strong>Next.js:</strong> Supports CSR, SSR (Server-Side Rendering), and SSG (Static Site Generation).</p>
                </div>
                <hr />

                <div>
                    <h2 className="text-xl font-semibold">3️⃣ Performance</h2>
                    <p><strong>React.js:</strong> Relies on client-side JavaScript, which can slow down initial page load.</p>
                    <p><strong>Next.js:</strong> Pre-renders pages, improving performance & SEO.</p>
                </div>
                <hr />

                <div>
                    <h2 className="text-xl font-semibold">4️⃣ SEO</h2>
                    <p><strong>React.js:</strong> Poor SEO due to client-side rendering.</p>
                    <p><strong>Next.js:</strong> Better SEO as it supports server-side rendering.</p>
                </div>
                <hr />

                <div>
                    <h2 className="text-xl font-semibold">5️⃣ Routing</h2>
                    <p><strong>React.js:</strong> Uses React Router for navigation.</p>
                    <p><strong>Next.js:</strong> Has built-in file-based routing.</p>
                </div>
                <hr />

                <div>
                    <h2 className="text-xl font-semibold">6️⃣ API Handling</h2>
                    <p><strong>React.js:</strong> Needs external tools (Express, Firebase) for backend.</p>
                    <p><strong>Next.js:</strong> Has built-in API routes for backend.</p>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default ReactVsNext;
