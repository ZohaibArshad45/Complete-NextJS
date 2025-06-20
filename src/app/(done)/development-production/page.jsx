import React from "react";

const DevelopmentProduction = () => {
    const environment = process.env.NODE_ENV; // current environment: 'development' or 'production'

    return (
        <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen font-sans">
            {/* Heading */}
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
                🚀 Development vs. Production in Next.js
            </h1>

            {/* Development Section */}
            <div className="mb-6 p-6 bg-white rounded-2xl shadow-md border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold text-blue-600 mb-3">🛠 Development Mode</h2>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 text-base">
                    <li>Run command: <code className="bg-gray-200 px-2 py-0.5 rounded">npm run dev</code></li>
                    <li>Hot Reloading: Changes immediately show hotay hain 🌀</li>
                    <li>Detailed Errors: Har bug ka proper message milta hai 🐞</li>
                    <li>Performance optimized nahi hoti – sirf coding aur testing ke liye hota hai</li>
                </ul>
            </div>

            {/* Production Section */}
            <div className="mb-6 p-6 bg-white rounded-2xl shadow-md border-l-4 border-yellow-400">
                <h2 className="text-2xl font-bold text-yellow-500 mb-3">⚡ Production Mode</h2>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 text-base">
                    <li>Run commands:
                        <code className="bg-gray-200 px-2 py-0.5 rounded mx-1">npm run build</code>
                        ➜
                        <code className="bg-gray-200 px-2 py-0.5 rounded mx-1">npm run start</code>
                    </li>
                    <li>Code minify + optimize hota hai 🚀</li>
                    <li>CSS aur JS fast load hote hain with caching</li>
                    <li>Warnings hata diye jaate hain — clean aur fast build ready hoti hai</li>
                </ul>
            </div>

            {/* Environment Status */}
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-300 text-blue-800 font-medium shadow-sm">
                🌍 Current Environment:{" "}
                <span className="font-bold">
                    {environment?.toUpperCase() || "UNKNOWN"}
                </span>
            </div>
        </div>
    );
};

export default DevelopmentProduction;
