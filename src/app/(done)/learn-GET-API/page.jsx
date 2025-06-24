'use client';
import React from 'react';
import Link from 'next/link';

const LearnGETAPI = () => {
    const dbData = `export const local_employee = [
  { id: 1, name: "Zohaib", age: 23, email: "zohaibfta@gmail.com" },
  { id: 2, name: "Ali", age: 24, email: "ali@example.com" },
  { id: 3, name: "Ahtisham", age: 22, email: "ahtisham@example.com" },
];`;

    const GETroute = `import { NextResponse } from "next/server";
import { local_employee } from "../../../localData/local-data";

export const GET = () => {
  return NextResponse.json(local_employee, { status: 200 });
};`;

    const dynamicRouter = `import { NextResponse } from "next/server";
import { local_employee } from "../../../../localData/local-data";

export const GET = async (req, { params }) => {
    const id = parseInt(params.id); // 🟢 string ko number me convert
    const empdata = local_employee.find(emp => emp.id === id); // 🟢 id match karo

    // if (!empdata) {
    //     return NextResponse.json({ error: "Employee not found" }, { status: 404 });
    // }
    // return NextResponse.json(empdata, { status: 200 });

    let result = !empdata? ({ result :'NOT Employee found'}) : ({result : empdata})
    return NextResponse.json(result);
};`;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-blue-600">📡 Learn GET API Routes in Next.js</h1>
            <p className="text-gray-700 text-lg">
                GET route ka use hota hai server se data lane ke liye — yaani jab aap fetch karte ho.
            </p>

            {/* ✅ Local Data Section */}
            <div>
                <h2 className="text-2xl font-semibold text-green-600">📁 Local Static Data</h2>
                <p className="text-gray-600">Yeh data frontend ya backend dono use kar sakte hain.</p>
                <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto">
                    <code>{dbData}</code>
                </pre>
            </div>

            {/* ✅ GET All Employees API */}
            <div>
                <h2 className="text-2xl font-semibold text-yellow-600">📨 Create GET Route (All Employees)</h2>
                <p className="text-gray-600">
                    <span className="font-bold">📂 Folder:</span> <code>app/api/local-get-api/route.js</code>
                </p>

                <Link
                    href="/api/local-get-api"
                    className="inline-block mt-3 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900"
                >
                    🔗 Test: /api/local-get-api
                </Link>

                <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto mt-4">
                    <code>{GETroute}</code>
                </pre>
            </div>

            {/* ✅ Dynamic GET by ID */}
            <div>
                <h2 className="text-2xl font-semibold text-pink-600">🧠 Dynamic GET Route (by ID)</h2>
                <p className="text-gray-600">
                    <span className="font-bold">📂 Folder:</span>{' '}
                    <code>app/api/local-get-api/[id]/route.js</code>
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2 mt-4">
                    <Link href="/api/local-get-api" className="px-3 py-2 bg-gray-800 text-white rounded-md">
                        👥 All Employees
                    </Link>
                    <Link href="/api/local-get-api/1" className="px-3 py-2 bg-green-600 text-white rounded-md">
                        🧑 Employee 1
                    </Link>
                    <Link href="/api/local-get-api/2" className="px-3 py-2 bg-orange-500 text-white rounded-md">
                        🧑 Employee 2
                    </Link>
                    <Link href="/api/local-get-api/3" className="px-3 py-2 bg-pink-700 text-white rounded-md">
                        🧑 Employee 3
                    </Link>
                    <Link href="/api/local-get-api/545" className="px-3 py-2 bg-red-600 text-white rounded-md">
                        🚫 Not Found
                    </Link>
                </div>

                <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto mt-4">
                    <code>{dynamicRouter}</code>
                </pre>
            </div>
        </div>
    );
};

export default LearnGETAPI;
