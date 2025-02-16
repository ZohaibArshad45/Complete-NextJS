import React from "react";
import Link from "next/link";

const employees = ["arslan", "shaoib", "zohaib", "ali", "ahmad", "ahtisham"];

const DynamicRoutes = () => {
    return (
        <div className="p-6">
            {/* Explanation Section */}
            <div className="mb-4 bg-gray-100 p-4 rounded-md shadow-md">
                <h2 className="text-xl font-bold text-gray-700">📌 Learn About Dynamic Routing</h2>
                <p className="text-gray-600">
                    ✅ To create a **dynamic route**, use square brackets `[ ]` in the folder name. <br />
                    ✅ Example: Creating a **details page** inside `employee/[id].js`. <br />
                    ✅ Inside the details page, we will use **params** to get the employee name. <br />
                    ✅ This page is a **client-side rendered page** using `<code>use client</code>`.
                </p>
            </div>

            {/* Employee Links */}
            <h1 className="text-green-700 font-bold text-2xl mb-2">👥 Employee Page</h1>
            <div className="flex flex-col gap-2 font-bold">
                {employees.map((name) => (
                    <Link key={name} href={`/dynamic-routes/${name}`} className="text-blue-500 hover:underline">
                        {/* {name} */}
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DynamicRoutes;