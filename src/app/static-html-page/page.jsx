import React from 'react';

const StaticHtmlPage = () => {
    return (
        <div className="flex flex-col items-center  min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Static HTML Export</h1>

            <p className="text-gray-700 text-center max-w-md">
                If we want to **convert the entire Next.js project to static HTML files**,
                we need to update the **next.config.js** file.
            </p>

            {/* ✅ Code Block Display */}
            <div className="mt-6 bg-gray-900 text-white p-4 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-lg font-semibold mb-2">📜 next.config.js:</h2>
                <pre className="text-sm overflow-x-auto">
                    <code>{`module.exports = {
  output: "export"
};`}</code>
                </pre>
            </div>

            <p className="text-gray-600 mt-4 text-sm">
                After setting this, run: <code className="bg-gray-200 px-2 py-1 rounded">npm run build</code>
            </p>
        </div>
    );
};

export default StaticHtmlPage;