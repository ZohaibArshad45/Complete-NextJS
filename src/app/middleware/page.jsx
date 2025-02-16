import React from 'react';

const LearnMiddleWare = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-600">🚀 Learn Middleware in Next.js</h1>
            <p className="text-gray-700 mt-2">
                Middleware is used to process requests between the client and the server before they reach the final destination.
            </p>

            {/* ✅ How to Create Middleware */}
            <div className="mt-4 p-4 border rounded-md bg-gray-100">
                <p className="text-lg font-semibold">🛠 How to Create Middleware in Next.js:</p>
                <ul className="list-disc list-inside text-gray-800 mt-2">
                    <li>📂 Create a <code>middleware.js</code> file inside the root directory.</li>
                    <li>✅ The file name must be exactly <strong>middleware.js</strong>.</li>
                    <li>📝 Inside this file, define the function:</li>
                    <pre className="bg-black text-white p-2 rounded-md mt-2">
                        {`export function middleware(request) {
    console.log('Middleware triggered');
}`}
                    </pre>
                    <li>🔄 Middleware runs before a request is completed and can be used for redirection, authentication, and logging.</li>
                </ul>
            </div>

            {/* ✅ Example Use Case */}
            <div className="mt-4 p-4 border rounded-md bg-gray-100">
                <p className="text-lg font-semibold">📌 Example Use Case:</p>
                <p className="text-gray-800 mt-2">
                    Middleware can be used to check if a user is logged in. If not, it redirects them to a login page.
                </p>
                <p className="text-gray-700 mt-2">
                    Example: If a user tries to access a protected page, middleware can **redirect** them to <code>/login</code>.
                </p>

                <pre className="bg-black text-white p-2 rounded-md mt-2">
                    {`export function middleware(request) {
    if (!request.cookies.get('authToken')) {
        return Response.redirect('/login');
    }
}`}
                </pre>
            </div>

            {/* ✅ Learn More */}
            <div className="mt-4 p-4 border rounded-md bg-gray-100">
                <p className="text-lg font-semibold text-blue-500">📚 Learn More:</p>
                <ul className="list-disc list-inside text-gray-800 mt-2">
                    <li>👉 Read the official Next.js <a href="https://nextjs.org/docs/app/building-your-application/routing/middleware" className="text-blue-600 underline">Middleware Documentation</a></li>
                    <li>👉 Watch tutorials on YouTube for practical implementation.</li>
                </ul>
            </div>
        </div>
    );
};

export default LearnMiddleWare;