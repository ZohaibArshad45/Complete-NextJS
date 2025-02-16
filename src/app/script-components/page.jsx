"use client";
import React from "react";
import Script from "next/script";

const ScriptComponents = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-600">🚀 Next.js Script Component</h1>
            <h2 className="text-xl text-gray-700 mt-2">📌 Using External Libraries Efficiently</h2>

            <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-full max-w-2xl">
                <h3 className="text-lg font-semibold">✅ Benefits of Next.js Script Component:</h3>
                <ul className="list-disc list-inside text-gray-800 mt-2">
                    <li>✔ <strong>Improves Performance</strong> – Loads scripts efficiently.</li>
                    <li>✔ <strong>SEO Friendly</strong> – Ensures search engines can index content properly.</li>
                    <li>✔ <strong>Execution Control</strong> – Load scripts at the right time.</li>
                    <li>✔ <strong>Prevents Render Blocking</strong> – Ensures faster page loads.</li>
                </ul>
            </div>

            {/* ✅ Example: External Script (Lazy Load) */}
            <Script
                src="https://www.google-analytics.com/analytics.js"
                strategy="lazyOnload"
                onLoad={() => console.log("✅ Google Analytics script loaded!")}
            />

            {/* ✅ Example: External Script from Public Folder */}
            <Script src="/myscript.js" strategy="afterInteractive" />

            {/* ✅ Example: Inline Script */}
            <Script
                id="custom-inline-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `console.log("✅ Inline script executed after hydration!");`,
                }}
            />

            <div className="mt-6 p-4 bg-white rounded-lg shadow-md w-full max-w-2xl">
                <h3 className="text-lg font-semibold">📌 Available Strategies in the Script Component</h3>
                <ul className="list-disc list-inside text-gray-800 mt-2">
                    <li>🟢 <strong>beforeInteractive</strong> → Loads before hydration (for critical scripts).</li>
                    <li>🟡 <strong>afterInteractive</strong> → Loads after hydration (default, recommended).</li>
                    <li>🔵 <strong>lazyOnload</strong> → Loads when the page is idle (best for performance).</li>
                </ul>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg shadow-md w-full max-w-2xl">
                <h3 className="text-lg font-semibold">📌 Best Use Cases for Next.js Script Component</h3>
                <ul className="list-disc list-inside text-gray-800 mt-2">
                    <li>✔ Google Analytics, Facebook Pixel, Ads, and Tracking Scripts.</li>
                    <li>✔ External JS libraries like jQuery, Chart.js, or third-party widgets.</li>
                    <li>✔ Custom scripts stored in the <code>/public</code> folder (local script files).</li>
                </ul>
            </div>
        </div>
    );
};

export default ScriptComponents;