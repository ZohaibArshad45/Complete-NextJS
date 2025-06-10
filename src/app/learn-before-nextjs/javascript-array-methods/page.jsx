"use client";
import React from "react";

const content = {
    title: "5. Array Methods",
    methods: [
        {
            name: "map()",
            detail:
                "Har item par operation perform karta hai aur naya array return karta hai. Original array change nahi hota.",
            code: `const nums = [1, 2, 3];\nconst double = nums.map(n => n * 2);\nconsole.log(double); // [2, 4, 6]`,
        },
        {
            name: "filter()",
            detail:
                "Jo values condition pass karti hain unhi ka naya array return karta hai.",
            code: `const nums = [1, 2, 3, 4];\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens); // [2, 4]`,
        },
        {
            name: "reduce()",
            detail:
                "Array ko single value mein convert karta hai (e.g. sum, multiply, etc.).",
            code: `const nums = [1, 2, 3, 4];\nconst total = nums.reduce((acc, curr) => acc + curr, 0);\nconsole.log(total); // 10`,
        },
        {
            name: "sort()",
            detail:
                "Array ko sort karta hai (default string-wise). Numbers ko sahi sort karne ke liye compare function use hoti hai.",
            code: `const nums = [10, 1, 5];\nconst sorted = nums.sort((a, b) => a - b);\nconsole.log(sorted); // [1, 5, 10]`,
        },
    ],
};

const ArrayMethodsPost = () => {
    return (
        <div className="bg-white text-gray-800 min-h-screen py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-10">
                📌 {content.title}
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">
                {content.methods.map((item, i) => (
                    <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6"
                    >
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                            🔹 {item.name}
                        </h2>
                        <p className="text-gray-700">{item.detail}</p>
                        <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg mt-2 overflow-auto">
                            <code>{item.code}</code>
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArrayMethodsPost;
