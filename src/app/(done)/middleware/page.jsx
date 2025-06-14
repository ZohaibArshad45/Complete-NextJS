import React from 'react';

const LearnMiddleWare = () => {
    return (
        <div className="p-6 min-h-screen bg-gray-100 space-y-8">
            {/* Title */}
            <h1 className="text-3xl font-bold text-blue-700 text-center">
                🚀 Learn Middleware in Next.js
            </h1>

            {/* What is Middleware */}
            <section className="bg-white rounded-lg shadow p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">📘 What is Middleware?</h2>
                <p>Middleware is used to process requests between the client and the server before they reach the final destination.

                </p>
                <p className="text-gray-700">
                    Middleware runs between a user’s request and the final response.
                </p>
                <p>Middleware is a powerful tool in Next.js used to run logic between a request and the response. It's ideal for:</p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>🔐 Authentication checks</li>
                    <li>🚦 Redirects</li>
                    <li>📊 Logging or analytics</li>
                    <li>🌍 Locale detection</li>
                </ul>
            </section>

            {/* How to Create Middleware */}
            <section className="bg-white rounded-lg shadow p-6 space-y-4">
                <h2 className="text-xl font-bold text-blue-600">🛠 How to Create Middleware</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Create a file named <code>middleware.js</code> at the root level of your project.</li>
                    <li>The file must export a function called <code>middleware</code>.</li>
                    <li>Inside this file, define the function:</li>
                    <li>This function receives a <code>request</code> object and can optionally return a <code>Response</code>.</li>
                </ul>

                <pre className="bg-black text-white rounded-md p-4 overflow-x-auto">
                    <code>
                        {`export function middleware(request) {
  console.log('Middleware triggered');
  return NextResponse.next(); // Allow request to continue
}`}
                    </code>
                </pre>
            </section>

            {/* Use Case */}
            <section className="bg-white rounded-lg shadow p-6 space-y-4">
                <h2 className="text-xl font-bold text-blue-600">🔐 Example Use Case: Authentication</h2>
                <p className="text-gray-800 mt-2">
                    Middleware can be used to check if a user is logged in. If not, it redirects them to a login page.
                </p>

                <pre className="bg-black text-white rounded-md p-4 overflow-x-auto">
                    <code>
                        {`import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('authToken');

  if (!token) {
    return NextResponse.redirect('/login');
  }

  return NextResponse.next();
}`}
                    </code>
                </pre>
                <pre className="bg-black text-white rounded-md p-4 overflow-x-auto">
                    <code>
                        {`import { NextResponse } from "next/server";
                        
let login = true; // Let user login status
                        
export function middleware(req) {
if (!login) {
// Redirect to home page if not logged in
return NextResponse.redirect(new URL('/', req.url));
}
return NextResponse.next(); // Allow access if logged in
}

// Apply middleware to /pay and all subroutes
export const config = {
matcher: ["/pay/:path*"], 
};`}
                    </code>
                </pre>
            </section>

            {/* Learn More */}
            <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-blue-500">📚 Learn More:</h2>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>
                        👉 <a href="https://nextjs.org/docs/app/building-your-application/routing/middleware" target="_blank" className="text-blue-600 underline">Next.js Middleware Docs</a>
                    </li>
                    <li>👉 Explore real-world examples on YouTube or GitHub</li>
                </ul>
            </section>
        </div>
    );
};

export default LearnMiddleWare;
