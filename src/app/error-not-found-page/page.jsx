'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const PageNot = () => {
    const router = useRouter();

    // Function to handle navigation
    const linkHandle = (nav) => {
        router.push(nav);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-red-600">🚀 Creating a 404 Page in Next.js</h1>

            <p className="text-gray-700 mt-2">
                To create a **404 (Page Not Found) error page**, follow these steps:
            </p>

            <ul className="list-disc ml-6 mt-2 text-gray-800">
                <li>📂 Inside the **app** directory, create a file named **not-found.tsx**.</li>
                <li>✅ Make sure the filename is exactly **not-found.tsx**.</li>
                <li>🎨 You can design the page however you like!</li>
            </ul>

            <br />

            <button onClick={() => linkHandle('KuchBhi')}>🔍 Test 404 Page</button>

            <br /><br />

            <h2 className="text-xl font-semibold text-blue-600">📌 Handling Specific Route Errors</h2>

            <p className="text-gray-700 mt-2">
                To create a **custom error page for specific routes**, use a **catch-all route**:
            </p>

            <ul className="list-disc ml-6 mt-2 text-gray-800">
                <li>📂 Create a folder named **[...errorPage]**.</li>
                <li>📝 Inside this folder, add a **page.tsx** file.</li>
                <li>🎨 Customize it to display an error message.</li>
            </ul>
        </div>
    );
};

export default PageNot;