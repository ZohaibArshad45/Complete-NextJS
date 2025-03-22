import React from 'react'

const LearnDeleteAPI = () => {
    const deleteAPI = `
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
    const empId = parseInt(params.empid); // Convert to number

    if (!empId) {
        return NextResponse.json({ result: "❌ Employee ID is missing!" }, { status: 400 });
    }

    return NextResponse.json({ result: \`✅ Employee with ID \${empId} has been deleted.\` }, { status: 200 });
};`
    
    return (
        <div>
            <h1 className="text-2xl font-bold text-red-600">🗑️ Learn DELETE API in Next.js</h1>
            <p className="text-gray-700 mt-4">🚀 DELETE API is used in **dynamic routes**.</p>
            <p> For check Paste it in POSTMAN <br />http://localhost:3000/api/getApi/3</p>
            <br />

            <h2 className="text-lg font-semibold text-gray-600">📜 Example DELETE API Route Code:</h2>
            <pre className="bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto">
                <code>{deleteAPI}</code>
            </pre>
        </div>
    )
}

export default LearnDeleteAPI
