'use client';
import React from 'react';

const ServerVsClient = () => {
    return (
        <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
            <div className="max-w-5xl mx-auto space-y-10">
                <h1 className="text-4xl font-bold text-center text-blue-700">
                    🧠 Server Side vs Client Side Rendering
                </h1>

                {/* Server Side Rendering */}
                <section className="p-6 md:p-8 bg-blue-50 rounded-2xl border border-blue-200 shadow-sm space-y-4">
                    <h2 className="text-2xl font-semibold text-blue-700 flex items-center gap-2">
                        🔹 Server Side Rendering (SSR)
                    </h2>
                    <p className="text-gray-700">
                        SSR (Server Side Rendering) ka matlab hai ke HTML server pe generate hoti hai aur browser me send hoti hai. Next.js me layouts & pages by default <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-purple-600">'Server Components'</code>  hote hain — yeh rendering server par hoti hai, not browser.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Layouts & pages are Server Components by default in Next.js</li>
                        <li>Data fetch server pe hoti hai, HTML pre-render ho jata hai</li>
                        <li>Performance aur SEO ke liye best approach</li>
                        <li>Browser ko kam JavaScript bhejna padta hai</li>
                    </ul>
                </section>

                {/* Client Side Rendering */}
                <section className="p-6 md:p-8 bg-purple-50 rounded-2xl border border-purple-200 shadow-sm space-y-4">
                    <h2 className="text-2xl font-semibold text-purple-700 flex items-center gap-2">
                        🔸 Client Side Rendering (CSR)
                    </h2>
                    <p className="text-gray-700">
                        Jab interactive UI chahiye (like buttons, input handling, etc.), tab aap <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-purple-600">'use client'</code> likh ke Client Components use karte ho. Yeh components sirf browser me run karte hain.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Client Components allow interactivity (hooks/events)</li>
                        <li>React code browser me execute hota hai</li>
                        <li>JavaScript bundle size zyada hota hai</li>
                        <li>SEO optimize karne ke liye extra efforts chahiye</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-700">
                        ✅ <strong>Pro Tip:</strong> Next.js allows hybrid rendering. SSR se performance milegi, aur CSR se rich interactivity. Use both strategically!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServerVsClient;
