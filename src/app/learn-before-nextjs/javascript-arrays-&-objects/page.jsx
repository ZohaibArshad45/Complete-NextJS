"use client";
import React from "react";

const content = {
    title: "4. Arrays and Objects",
    sections: [
        {
            name: "Array",
            detail: "JavaScript arrays are used to store multiple values in a single variable.",
            code: `const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits[1]); // banana`,
        },
        {
            name: "Array Destructuring",
            detail: "Extract array values into variables easily.",
            code: `const [a, b] = [10, 20];\nconsole.log(a); // 10\nconsole.log(b); // 20`,
        },
        {
            name: "Object",
            detail: "Objects hold key-value pairs to store structured data.",
            code: `const user = { name: "Ali", age: 25 };\nconsole.log(user.name); // Ali`,
        },
        {
            name: "Object Destructuring",
            detail: "Easily extract values from objects into variables.",
            code: `const { name, age } = user;\nconsole.log(name); // Ali`,
        },
        {
            name: "Rest Operator",
            detail: "`...` collects remaining elements into a new array or object.",
            code: `const [x, ...rest] = [1, 2, 3, 4];\nconsole.log(rest); // [2, 3, 4]`,
        },
        {
            name: "Spread Operator",
            detail: "`...` spreads or copies elements of array/object into another.",
            code: `const nums = [1, 2];\nconst all = [...nums, 3, 4];\nconsole.log(all); // [1, 2, 3, 4]`,
        },
    ],
};

const ArraysAndObjects = () => {
    return (
        <div className="bg-white text-gray-800 min-h-screen py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-10">
                📦 {content.title}
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">
                {content.sections.map((item, index) => (
                    <div
                        key={index}
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

export default ArraysAndObjects;
