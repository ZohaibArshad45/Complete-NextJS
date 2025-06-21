'use client';
import Image from 'next/image';
import React from 'react';

const StaticAssets = () => {
    const codeString = `
import Image from 'next/image';

const StaticAssets = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-4 rounded shadow-lg w-80 h-80 flex items-center justify-center">
        <Image
          src="/man.png"
          alt="Illustration of a person"
          width={200}
          height={200}
          priority
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default StaticAssets;
`;

    return (
        <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center space-y-10">
            <h1 className="text-3xl font-bold text-center text-blue-700">
                📁 Public Folder in Next.js
            </h1>
            <p className="text-gray-700 text-center max-w-xl">
                <strong>Public folder</strong> ka use Next.js mein static files (📸 images, JS, CSS) store karne ke liye hota hai. Path mein kabhi bhi <code>/public</code> likhne ki zarurat nahi hoti. Example:
                <br />
                <code className="bg-gray-200 px-2 py-1 rounded">/man.png</code>
            </p>

            {/* ✅ Benefits & Drawbacks */}
            <div className="bg-white shadow-md rounded-md p-6 w-full max-w-2xl">
                <h2 className="text-xl font-semibold text-green-600 mb-2">✅ Faide (Benefits):</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Direct access — bina import ke image use kar sakte ho.</li>
                    <li>JavaScript ya CSS file bhi rakh sakte ho (external usage ke liye).</li>
                    <li>Fast serving — CDN se as-is serve hoti hai (webpack touch nahi karta).</li>
                </ul>

                <h2 className="text-xl font-semibold text-red-500 mt-5 mb-2">❌ Nuksaan (Drawbacks):</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Images optimize nahi hoti (next/image zyada better hota hai).</li>
                    <li>Import kar ke use nahi kar sakte.</li>
                    <li>Bade files agar rakhe to page slow ho sakta hai.</li>
                </ul>
            </div>

            {/* ✅ Example Image */}
            <div className="w-80 h-80 bg-white rounded shadow-lg flex items-center justify-center">
                <Image
                    src="/man.png"
                    alt="Illustration of a person"
                    width={200}
                    height={200}
                    priority
                    className="rounded-md shadow"
                />
            </div>

            {/* ✅ Code Block */}
            <div className="w-full max-w-3xl bg-gray-900 text-white p-5 rounded-lg shadow overflow-x-auto">
                <h2 className="text-lg font-semibold text-yellow-400 mb-2">📜 Code Example:</h2>
                <pre className="text-sm leading-relaxed ">
                    <code>{codeString}</code>
                </pre>
            </div>
        </div>
    );
};

export default StaticAssets;
