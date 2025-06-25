import React from "react";

const LearnPOSTAPI = () => {
  const simplePOSTRoute = `import { NextResponse } from "next/server";

export const POST = async (req) => {
  const data = await req.json();
  return NextResponse.json({ result: "done" }, { status: 200 });
};`;

  const advancedPOSTRoute = `import { NextResponse } from "next/server";

export const POST = async (req) => {
  const data = await req.json();
      // console.log(data)
      // console.log(data.id)
      // console.log(data.name)

  if (!data.id || !data.name) {
    return NextResponse.json({ result: "Failed" }, { status: 400 });
  }

  return NextResponse.json({ result: "done" }, { status: 200 });
};`;

  const exampleBody = `{
  "id": 1,
  "name": "Zohaib"
}`;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        📡 Learn POST API in Next.js
      </h1>

      <p className="text-gray-700">
        ✅ This API receives data using a <strong>POST</strong> request.
      </p>

      <a
        href="/api/local-post-api"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
      >
        🔗 Visit POST API Route
      </a>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded">
        📌 Test this endpoint in <strong>Postman</strong> or use fetch in frontend.<br />
        Don’t forget to set <code className="bg-white px-1 py-0.5 rounded text-sm">Content-Type: application/json</code>
      </div>

      {/* Example Request Body */}
      <div>
        <h2 className="text-lg font-semibold text-indigo-500">
          📤 Sample JSON Body
        </h2>
        <pre className="bg-gray-900 text-white font-mono rounded-lg p-4 overflow-x-auto text-sm">
          <code>{exampleBody}</code>
        </pre>
      </div>

      {/* Simple POST */}
      <div>
        <h2 className="text-lg font-semibold text-yellow-500">
          🧾 Simple POST Route
        </h2>
        <pre className="bg-gray-800 text-white font-mono rounded-lg p-4 overflow-x-auto text-sm">
          <code>{simplePOSTRoute}</code>
        </pre>
      </div>

      {/* Advanced POST */}
      <div>
        <h2 className="text-lg font-semibold text-red-500">
          🧪 Advanced POST Route (with Validation)
        </h2>
        <p className="text-gray-600">
          👉 This API expects a JSON body with keys:{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded">{"{ id, name }"}</code>.
        </p>
        <p className="text-gray-600">If missing, it returns a 400 error.</p>

        <pre className="bg-gray-800 text-white font-mono rounded-lg p-4 overflow-x-auto text-sm">
          <code>{advancedPOSTRoute}</code>
        </pre>
      </div>
    </div>
  );
};

export default LearnPOSTAPI;
