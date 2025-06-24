import React from 'react';
import Link from 'next/link';

const Learn1FirstRoute = () => {
  const FAPIROUTER = `
// ✅ API Route in Next.js (app/api/firstroute/route.js)
//1️⃣ Normal Function (not arrow)
// export async function GET() {
//   return new Response("✅ Normal Named Function");
// }

//2️⃣ Simple Arrow Function (Shortest)
// export const GET = ()=>{
//     return new Response("he")
// }

//3️⃣ Async Arrow Function
// export const GET = async () => {
//   return new Response("✅ Async Arrow Function");
// };

//4️⃣ With request parameter
//export const GET = async (request) => {
//   return new Response("✅ With Request Object");
// };


//5️⃣ Return JSON using NextResponse.json()
import { NextResponse } from "next/server";

// Handle GET requests
export const GET = () => {
    return NextResponse.json([
        {
            name: 'Zohaib',
            age: 24,
            location: "Bahawalpur"
        },
        {
            name: 'Zohan',
            age: 24,
            location: "Bahawalpur"
        }
    ]);
};
`;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600">📡 Learn Route API (Server Side - Backend)</h1>

      <p className="text-gray-700 mt-4">
        ✅ Follow these steps to create an API route in Next.js:
      </p>

      <ol className="list-decimal ml-6 text-gray-800">
        <li>📂 Inside the <strong>app</strong> folder, create a new folder called <strong>api</strong>.</li>
        <li>📁 Inside the <strong>api</strong> folder, create another folder (e.g., <strong>firstroute</strong>).</li>
        <li>📜 Inside <strong>firstroute</strong>, create a file named <strong>route.js</strong>.</li>
      </ol>

      <br />

      <Link
        href="/api/firstroute"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
      >
        🔗 Visit API Route
      </Link>

      <br /> <br />

      <h2 className="text-lg font-semibold text-gray-600">📜 Example API Route Code:</h2>
      <pre className="bg-gray-800 text-green-600 w-full rounded-xl p-2 overflow-x-auto">
        <code>{FAPIROUTER}</code>
      </pre>
    </div>
  );
};

export default Learn1FirstRoute;
