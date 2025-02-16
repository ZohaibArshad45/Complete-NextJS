import React from "react";

const DevelopmentProduction = () => {
    const environment = process.env.NODE_ENV; // Get the current environment

    return (
        <div className="p-6 font-sans">
            <h1 className="text-3xl font-bold text-gray-800">🚀 Development vs. Production Build</h1>

            {/* Development Build */}
            <h2 className="text-blue-600 text-2xl font-semibold mt-4">🛠 Development Build</h2>
            <ul className="list-disc ml-6 text-gray-700">
                <li>Run with: <code className="bg-gray-200 px-2 rounded">npm run dev</code></li>
                <li>Faster refresh with Hot Reloading</li>
                <li>Detailed error logs & warnings</li>
                <li>Not optimized for performance</li>
            </ul>

            {/* Production Build */}
            <h2 className="text-yellow-500 text-2xl font-semibold mt-4">⚡ Production Build</h2>
            <ul className="list-disc ml-6 text-gray-700">
                <li>Run with: <code className="bg-gray-200 px-2 rounded">npm run build</code> → <code className="bg-gray-200 px-2 rounded">npm run start</code></li>
                <li>Optimized, minified JavaScript & CSS</li>
                <li>Improved performance & caching</li>
                <li>Removes development-only warnings</li>
            </ul>

            {/* Display Current Environment */}
            {/* <div className="mt-6 p-4 bg-gray-100 border-l-4 border-blue-500">
                <p className="text-gray-800 font-medium">🌍 Current Environment: <span className="font-bold text-blue-700">{environment.toUpperCase()}</span></p>
            </div> */}
        </div>
    );
};

export default DevelopmentProduction;