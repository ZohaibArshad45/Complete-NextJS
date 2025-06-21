import React from 'react';

const StaticHtmlPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">
                📦 Static HTML Export in Next.js
            </h1>

            <p className="text-gray-700 text-center max-w-xl text-lg">
                Agar aap apna **Next.js project ko pura static HTML pages** mein convert karna chahtay hain
                (bina kisi server-side code ke), to aapko <code className="bg-yellow-100 px-2 rounded">next.config.js</code> file mein ek option add karna hoga.
            </p>

            {/* ✅ Code Block Display */}
            <div className="mt-6 bg-gray-900 text-white p-5 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-lg font-semibold text-yellow-400 mb-2">📜 next.config.js:</h2>
                <pre className="text-sm overflow-x-auto">
                    <code>{`module.exports = {
  output: "export"
};`}</code>
                </pre>
            </div>

            <p className="text-gray-600 mt-4 text-base text-center">
                🔧 Uske baad terminal mein yeh run karein:
                <br />
                <code className="bg-gray-200 px-2 py-1 rounded text-sm mt-2 inline-block">
                    npm run build
                </code>
            </p>

            {/* 💡 Bonus Note */}
            <div className="bg-white p-4 mt-6 rounded-md shadow max-w-xl text-sm text-gray-800">
                <strong className="text-green-600">💡 Kab use karna chahiye Static Export?</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Jab aapko sirf static content serve karna ho (no dynamic data).</li>
                    <li>Jab aap site ko Netlify, GitHub Pages, ya Firebase Hosting pe deploy kar rahe ho.</li>
                    <li>Performance aur SEO ke liye ideal hai, lekin dynamic features (like API calls SSR/ISR) kaam nahi karte.</li>
                    <li>OUT name ka folder ban kr a jye ga</li>
                </ul>
            </div>
        </div>
    );
};

export default StaticHtmlPage;
