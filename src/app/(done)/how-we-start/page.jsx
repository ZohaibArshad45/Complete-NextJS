import React from "react";

const HowWeStart = () => {
    return (
        <div className=" flex flex-col items-center p-6">
            <h1 className="text-4xl font-extrabold text-blue-800 mb-6">🚀 How We Start</h1>
            <p className="text-lg text-gray-700 text-center max-w-2xl leading-relaxed">
                To start a Next.js project, run the following command:
            </p>

            <div className="bg-gray-800 text-white font-mono text-lg p-4 rounded-xl shadow-md mt-4">
                <code>npx create-next-app@latest my-next-app</code>
            </div>

            <p className="text-gray-600 mt-4">
                Then navigate into the project and start the development server:
            </p>

            <div className="bg-gray-800 text-white font-mono text-lg p-4 rounded-xl shadow-md mt-2">
                <code>cd my-next-app && npm run dev</code>
            </div>

            <p className="text-gray-600 mt-4">
                Open <span className="font-bold">http://localhost:3000</span> in your browser to see your Next.js app in action!
            </p>
        </div>
    );
};

export default HowWeStart;
