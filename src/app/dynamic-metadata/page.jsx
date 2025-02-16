export function generateMetadata() {
    return {
        title: "🚀 My First Project",
        description: "This is a description for SEO optimization.",
        // openGraph: {
        //     title: "🚀 My First Project",
        //     description: "This is a description for SEO optimization.",
        //     type: "website",
        // },
    };
}

import React from "react";

const DynamicMetaData = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">🌍 Dynamic Metadata</h1>
            <pre className="text-gray-700">
                ✅ <strong>Dynamic Metadata Benefits:</strong> <br />
                ✔ SEO Friendly – Improves Google ranking. <br />
                ✔ Dynamic Content – No need to hardcode titles. <br />
                ✔ Social Media Optimization – Enhances link previews.
            </pre>

            <br />

            <pre className="text-gray-700">
                ✅ <strong>How We Use Dynamic Metadata in Next.js:</strong> <br />
                1️⃣ Define <code className="bg-gray-200 px-2 rounded">generateMetadata</code> inside your page file. <br />
                2️⃣ Return an object with title, description, and Open Graph metadata. <br />
                3️⃣ Next.js automatically applies it to the page header. <br />
                4️⃣ No need for <code className="bg-gray-200 px-2 rounded">title</code> tags inside JSX!
            </pre>
        </div>
    );
};

export default DynamicMetaData;