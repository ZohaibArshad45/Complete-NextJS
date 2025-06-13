import React from "react";
import Link from "next/link";

// Dummy list of employee names
const employees = ["arslan", "shaoib", "zohaib", "ali", "ahmad", "ahtisham"];

const DynamicRoutes = () => {
    return (
        <div className="p-6 min-h-screen bg-gray-50 space-y-6">
            {/* 📘 Explanation */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-2">📌 Understanding Dynamic Routing</h2>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                    <li>
                        ✅ To define a <strong>dynamic route</strong>, wrap the folder or file name in <code>[ ]</code>.
                    </li>
                    <li>
                        ✅ Example: Create <code className="text-red-500 font-bold">app/dynamic-routes/[id]/page.jsx</code> to handle dynamic employee profiles.
                    </li>
                    <li>
                        ✅ You can access the route parameter using <code className="text-red-500 font-bold">{`params.details`}</code> inside the page component.
                    </li>
                </ul>
            </div>

            {/* 👥 Employee Links */}
            <div>
                <h1 className="text-2xl font-bold text-green-700 mb-3">👥 Employee Profiles</h1>
                <div className="flex flex-col gap-2 font-medium">
                    {employees.map((name) => (
                        <Link
                            key={name}
                            href={`/learn-dynamic-routes/${name}`}
                            className="text-blue-600 hover:text-blue-800 hover:underline transition"
                        >
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DynamicRoutes;
