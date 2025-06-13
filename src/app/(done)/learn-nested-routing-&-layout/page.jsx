"use client";
import { useRouter } from "next/navigation";

const layoutCode = `'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div>
      {children}

{/* Conditional Layout Rendering: hide on /nested-routing/arslan */}
      {pathname === '/nested-routing/arslan' ? null : (
        <div className="m-6 text-center">
          <p className="text-gray-600 mt-2">This is rendered from the layout component</p>
          <Link href="/nested-routing">
            <span className="bg-red-700 hover:bg-red-900 text-white px-4 py-2 rounded-lg inline-block shadow-md transition">
              🔙 Back to Nested Routing
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
`;

const NestedRouting = () => {
    const router = useRouter();

    const navLink = (path) => {
        router.push(path);
    };

    return (
        <div className="p-6 flex flex-col items-center justify-center min-h-screen space-y-6">
            <h1 className="text-3xl font-bold text-blue-700 text-center">
                🚀 Understanding Nested Routes and Layout and Conditional Layout in Next.js
            </h1>

            {/* What are Nested Routes? */}
            <p className="text-gray-700 text-center max-w-2xl">
                In <strong>Next.js</strong>, nested routes are created by organizing files inside folders under the <strong>app/</strong> directory (App Router).
            </p>

            {/* Example of Nested Routes */}
            <div className="text-center space-y-2">
                <h2 className="text-lg font-semibold text-green-700 mt-6">📌 Example of Nested Routes</h2>
                <p className="text-gray-700 max-w-xl mx-auto">
                    Create a folder <strong>Anyname/</strong> inside <strong>app/</strong>.Create an other folder <strong>otherName/</strong> inside <strong></strong> Then add files like :
                </p>
                <ul className="list-disc mt-3 text-gray-800 text-left mx-auto max-w-md pl-6">
                    <li><strong>/User/shoaib/page.jsx</strong></li>
                    <li><strong>/User/zohaib/page.jsx</strong></li>
                    <li><strong>/User/arslan/page.jsx</strong></li>
                </ul>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 flex-wrap justify-center mt-4">
                <button onClick={() => navLink("/learn-nested-routing-&-layout/shoaib")} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                    🔹 Shoaib
                </button>
                <button onClick={() => navLink("/learn-nested-routing-&-layout/zohaib")} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
                    🔹 Zohaib
                </button>
                <button onClick={() => navLink("/learn-nested-routing-&-layout/arslan")} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition">
                    🔹 Arslan
                </button>
            </div>

            {/* Layout Info */}
            <div className="text-center space-y-2 max-w-xl mt-6">
                <h2 className="text-lg font-semibold bg-gray-400  text-red-600">🖌 Shared Layouts for Nested Routes</h2>
                <p className="text-gray-700">
                    Create a <strong>layout.jsx</strong> file inside the <strong>nested-routing/</strong> folder. It will wrap all child pages.
                </p>
                <p className="text-gray-700">
                    You can also add <strong>conditional layout logic</strong>. For example, here we’re hiding the layout section on the <code>/arslan</code> page.
                </p>
                <p className="text-gray-700">
                    Below is the layout code:
                </p>

                <pre className="bg-gray-900 text-white text-sm p-4 rounded-xl text-left overflow-x-auto whitespace-pre-wrap">
                    <code>{layoutCode}</code>
                </pre>
            </div>
        </div>
    );
};

export default NestedRouting;
