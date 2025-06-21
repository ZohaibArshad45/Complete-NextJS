'use client';

import React from 'react';
import Script from 'next/script';

const ScriptComponentInfo = () => {
    return (
        <div className="p-6 font-sans bg-gray-100 min-h-screen text-gray-800">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">📜 Next.js Script Component ka Use</h1>

            {/* ✅ What is Script Component */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-green-700">🔍 Script Component Kya Hai?</h2>
                <p className="mt-2">
                    <code className="bg-gray-200 px-2 py-0.5 rounded">next/script</code> ka component hota hai 
                    <strong> third-party JS files</strong> ko load karne ke liye (jaise Google Analytics, Ads, etc.) optimized way mein.
                </p>
            </section>

            {/* ✅ Why Use */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-yellow-600">⚡ Kyun Use Karte Hain?</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li>✅ Better performance: Lazy loading and optimized inject hota hai.</li>
                    <li>✅ Control: Kab aur kaise script load ho, control kar sakte hain.</li>
                    <li>✅ No layout shift: Scripts delay nahi karte rendering ko.</li>
                </ul>
            </section>

            {/* ✅ When to Use */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-purple-600">⏰ Kab Use Karna Chahiye?</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li>🧠 Jab aapko koi <strong>external JS library</strong> add karni ho.</li>
                    <li>📊 Google Analytics, Ads, Stripe, PayPal jaise tools mein.</li>
                    <li>🎯 Jab aap specific route ya component pe hi load karwana chahte ho script.</li>
                </ul>
            </section>

            {/* ✅ How to Use */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-blue-600">🛠 Kaise Use Karte Hain?</h2>

                <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto text-sm mt-2">
                    <code>
{`import Script from 'next/script';

export default function MyComponent() {
    return (
        <>
            <h1>Google Analytics Example</h1>

            {/* ✅ External Script (Lazy Load) */}
            <Script
                src="https://www.google-analytics.com/analytics.js"
                strategy="lazyOnload"
                onLoad={() => console.log("✅ Google Analytics script loaded!")}
            />

            {/* ✅ Script from Public Folder */}
            <Script src="/myscript.js" strategy="afterInteractive" />

            {/* ✅ Inline Script */}
            <Script
                id="custom-inline-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: console.log("✅ Inline script executed after hydration!");
                }}
            />
        </>
    );
}`}
                    </code>
                </pre>

                <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 p-3 text-sm">
                    <strong>💡 strategy prop:</strong> Yeh batata hai script kab run kare:
                    <ul className="list-disc ml-5 mt-1">
                        <li><code>beforeInteractive</code> – Render se pehle (rarely use)</li>
                        <li><code>afterInteractive</code> – Page load ke baad (⚡ recommended)</li>
                        <li><code>lazyOnload</code> – Sab kuch load hone ke baad</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ScriptComponentInfo;
