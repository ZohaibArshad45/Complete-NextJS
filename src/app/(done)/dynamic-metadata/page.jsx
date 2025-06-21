import React from "react";

const DynamicMetaData = () => {
    return (
        <div className="p-6 bg-white text-gray-800 min-h-screen font-sans">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">🌍 Dynamic Metadata in Next.js</h1>

            {/* 🔍 Benefits Section */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-semibold text-green-600">📈 Fayde (Benefits):</h2>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li>✅ SEO Friendly – Google ranking improve hoti hai.</li>
                    <li>✅ Dynamic – Har page ka alag meta data bana saktay hain.</li>
                    <li>✅ Social Share Ready – Link previews better ban’tay hain.</li>
                </ul>
            </div>

            {/* 🔧 How to Use Section */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-semibold text-yellow-600">⚙ Kaise Use Karein?</h2>
                <ol className="list-decimal pl-6 mt-2 text-gray-700">
                    <li><code className="bg-gray-200 px-2 py-0.5 rounded">generateMetadata()</code> function page ke andar likho.</li>
                    <li>Usme <code>title</code>, <code>description</code>, aur optional <code>openGraph</code> metadata return karo.</li>
                    <li>Next.js automatically head mein meta laga deta hai.</li>
                    <li>Ab JSX mein <code>{`<title>`}</code> use karne ki zarurat nahi.</li>
                </ol>
            </div>

            {/* 🧠 Code Example Section */}
            <div className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
                <h2 className="text-lg font-semibold text-cyan-400 mb-2">🧠 Example Code:</h2>
                <pre className="whitespace-pre-wrap text-sm">
                    <code>
{`export function generateMetadata() {
    return {
        title: "🚀 My First Project",
        description: "Yeh SEO optimization ke liye description hai.",
        // openGraph: {
        //     title: "🚀 My First Project",
        //     description: "Social sharing ke liye optimize.",
        //     type: "website",
        // },
    };
}`}</code>
                </pre>
            </div>
        </div>
    );
};

export default DynamicMetaData;


// ✅ SEO Metadata Function
export function generateMetadata() {
    return {
        title: "🚀 My First Project",
        description: "Yeh SEO optimization ke liye description hai.",
        // openGraph: {
        //     title: "🚀 My First Project",
        //     description: "Social sharing ke liye optimize.",
        //     type: "website",
        // },
    };
}