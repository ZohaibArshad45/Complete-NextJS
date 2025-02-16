"use client";
import { useRouter } from "next/navigation";

const NestedRouting = () => {
    const router = useRouter();

    // Function for dynamic navigation
    const navLink = (path) => {
        router.push(path);
    };

    return (
        <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-blue-700">🚀 Understanding Nested Routes in Next.js</h1>

            {/* What are Nested Routes? */}
            <p className="text-gray-700 mt-2 text-center max-w-xl">
                In <strong>Next.js</strong>, **nested routes** are created by organizing pages inside folders.
            </p>

            {/* Example of Nested Routes */}
            <h2 className="text-lg font-semibold text-green-700 mt-6">📌 Example of Nested Routes</h2>
            <p className="text-gray-700 text-center max-w-xl">
                Suppose we create a folder **nested-routing/** inside the **pages/app** directory.
                If we add files like **shoaib.tsx**, **zohaib.tsx**, and **arslan.tsx**, their routes will be:
            </p>

            <ul className="list-disc mt-3 text-gray-800 text-left">
                <li><strong>/nested-routing/shoaib</strong></li>
                <li><strong>/nested-routing/zohaib</strong></li>
                <li><strong>/nested-routing/arslan</strong></li>
            </ul>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-5">
                <button
                    onClick={() => navLink("/nested-routing/shoaib")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                >
                    🔹 Shoaib
                </button>
                <button
                    onClick={() => navLink("/nested-routing/zohaib")}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800"
                >
                    🔹 Zohaib
                </button>
                <button
                    onClick={() => navLink("/nested-routing/arslan")}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800"
                >
                    🔹 Arslan
                </button>
            </div>

            {/* Layout Concept in Nested Routes */}
            <h2 className="text-lg font-semibold text-purple-600 mt-8">🖌 Using Layout for Nested Routes</h2>
            <p className="text-gray-700 mt-2 text-center max-w-xl">
                If we need a **common layout, styles, or functions** for all pages inside **nested-routing/**,
                we can create a **layout.tsx** file inside the **nested-routing** directory.
            </p>

            <p className="text-gray-700 text-center max-w-xl mt-2">
                This ensures all pages inside **nested-routing/** will share a consistent UI structure.
            </p>
        </div>
    );
};

export default NestedRouting;
