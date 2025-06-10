"use client";
import React from "react";

const asyncAwaitContent = [
    {
        title: "1. Async Function",
        description:
            "`async` keyword function ke aage lagta hai, jisse wo hamesha promise return karta hai.",
        code: `async function greet() {\n  return "Hello Zohaib";\n}\n\ngreet().then(msg => console.log(msg)); // Hello Zohaib`,
    },
    {
        title: "2. Await Keyword",
        description:
            "`await` sirf async function ke andar use hota hai. Ye kisi promise ko wait karta hai bina callback ke.",
        code: `function delay() {\n  return new Promise(resolve => {\n    setTimeout(() => resolve("Waited 2 sec"), 2000);\n  });\n}\n\nasync function run() {\n  const result = await delay();\n  console.log(result); // Waited 2 sec\n}\n\nrun();`,
    },
    {
        title: "Bonus: Error Handling",
        description:
            "`try/catch` use karke async/await ke errors handle kar sakte ho cleanly.",
        code: `async function fetchData() {\n  try {\n    const res = await fetch("https://api.example.com");\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error("Error:", err);\n  }\n}`,
    },
];

const AsyncAwaitPage = () => {
    return (
        <div className="bg-white text-gray-800 min-h-screen py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
                ⏳ 8. Async / Await in JavaScript
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">
                {asyncAwaitContent.map((item, i) => (
                    <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6"
                    >
                        <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                            🔹 {item.title}
                        </h2>
                        <p className="text-gray-700 mb-3">{item.description}</p>
                        <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg overflow-auto">
                            <code>{item.code}</code>
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AsyncAwaitPage;
