import React from "react";

const LearnDeleteAPI = () => {
  const deleteAPI = `import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const empId = parseInt(params.empid); // Convert to number

  if (!empId) {
    return NextResponse.json(
      { result: "❌ Employee ID is missing!" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { result: \`✅ Employee with ID \${empId} has been deleted.\` },
    { status: 200 }
  );
};`;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-red-600">🗑️ Learn DELETE API in Next.js</h1>

      <p className="text-gray-700">
        ✅ This API uses the <code className="bg-gray-200 px-1 py-0.5 rounded">DELETE</code> method.
        You can test it in <strong>Postman</strong> by hitting the route with an ID.
      </p>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded">
        📌 Example endpoint:
        <br />
        <code className="bg-white p-1 rounded text-sm block mt-1">
          DELETE /api/local-delete-api/2
        </code>
        <p className="text-sm mt-1">
          Replace <code className="bg-gray-200 px-1 py-0.5 rounded">2</code> with any dynamic ID.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-red-500">
          📜 DELETE API Route Code
        </h2>
        <pre className="bg-gray-900 text-white font-mono rounded-lg p-4 overflow-x-auto text-sm">
          <code>{deleteAPI}</code>
        </pre>
      </div>
    </div>
  );
};

export default LearnDeleteAPI;
