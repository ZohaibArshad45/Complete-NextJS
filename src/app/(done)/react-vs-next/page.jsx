import React from 'react';

const comparisons = [
    {
        title: '1️⃣ Architecture',
        react: 'Frontend library for building UI components.',
        next: 'Full-stack framework with frontend & backend capabilities.',
    },
    {
        title: '2️⃣ Rendering',
        react: 'Only supports Client-Side Rendering (CSR).',
        next: 'Supports CSR, SSR (Server-Side Rendering), and SSG (Static Site Generation).',
    },
    {
        title: '3️⃣ Performance',
        react: 'Relies on client-side JavaScript, which can slow down initial page load.',
        next: 'Pre-renders pages, improving performance & SEO.',
    },
    {
        title: '4️⃣ SEO',
        react: 'Poor SEO due to client-side rendering.',
        next: 'Better SEO as it supports server-side rendering.',
    },
    {
        title: '5️⃣ Routing',
        react: 'Uses React Router for navigation.',
        next: 'Has built-in file-based routing.',
    },
    {
        title: '6️⃣ API Handling',
        react: 'Needs external tools (Express, Firebase) for backend.',
        next: 'Has built-in API routes for backend.',
    },
];

const ReactVsNext = () => {
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">⚔️ React.js vs Next.js</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {comparisons.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition">
                        <h2 className="text-lg font-semibold text-purple-700 mb-3">{item.title}</h2>

                        <div className="space-y-2">
                            <p>
                                <span className="font-semibold text-blue-600">React.js:</span> {item.react}
                            </p>
                            <p>
                                <span className="font-semibold text-red-600">Next.js:</span> {item.next}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReactVsNext;
