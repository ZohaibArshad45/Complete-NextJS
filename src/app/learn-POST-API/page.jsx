import React from 'react';
import Link from 'next/link';

const LearnPOSTAPI = () => {
  const simplePOSTRoute = `
import { NextResponse } from "next/server";

export const POST = () => {
    return NextResponse.json([{ id: 2, name: 'Zohaib', city: 'bwp' }]);
};`;

  const advancedPOSTRoute = `
import { NextResponse } from "next/server";

export const POST = async (req) => {
    let data = await req.json(); // Read JSON data from request body

    if (!data.id || !data.name) {
        return NextResponse.json(
            { error: "❌ 'id' or 'name' is missing!" }, 
            { status: 400 } // Return 400 (Bad Request)
        );
    }

    return NextResponse.json(
        { success: "✅ Data Received!", receivedData: data }, 
        { status: 201 } // Return 201 (Created)
    );
};`;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600">📡 Learn POST API in Next.js</h1>
      <p className="text-gray-700 mt-4">✅ This API receives data using a POST request.</p>

      {/* API Route Link */}
      <Link
        href="/api/postApi"
        className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition mt-4"
      >
        🔗 Visit POST API Route
      </Link>

      <p className="text-gray-600 mt-2">📌 To test, copy the URL and paste it in **Postman** with a POST request.</p>

      {/* Simple POST Route */}
      <h2 className="text-lg font-semibold text-yellow-500 mt-6">📜 Simple POST Route</h2>
      <pre className="bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto">
        <code>{simplePOSTRoute}</code>
      </pre>

      {/* Advanced POST Route */}
      <h2 className="text-lg font-semibold text-red-500 mt-6">📜 Advanced POST Route (With Validation)</h2>
      <p className="text-gray-600">👉 This API expects a JSON body with <code>{"{ id, name }"}</code>.</p>
      <p className="text-gray-600">If missing, it returns an error.</p>
      
      <pre className="bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto">
        <code>{advancedPOSTRoute}</code>
      </pre>
    </div>
  );
};

export default LearnPOSTAPI;
