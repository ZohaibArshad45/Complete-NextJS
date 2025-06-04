"use client";
import React from "react";

const sections = [
    {
        title: "1. Functions in JavaScript",
        description:
            "Functions woh hotay hain jo aap ka code repeat hone se bachatay hain. Aap logic ko aik block mein wrap kar ke baar baar use kar saktay ho.",
        points: [
            {
                name: "Function Declaration",
                detail:
                    "Ye classic tareeqa hai function define karne ka, jisme function ka naam diya jata hai.",
                code: `function greet(name) {\n  return "Hello, " + name;\n}\nconsole.log(greet("Zohaib")); // Hello, Zohaib`,
            },
            {
                name: "Function Expression",
                detail: "Function ko aik variable mein store karte hain.",
                code: `const add = function(a, b) {\n  return a + b;\n};\nconsole.log(add(5, 3)); // 8`,
            },
        ],
    },
    {
        title: "2. Arrow Functions",
        description:
            "Arrow functions aik modern aur short tareeqa hai function likhne ka. Choti logic ya quick kaam ke liye best hain.",
        points: [
            {
                name: "Basic Arrow Function",
                detail:
                    "Agar function aik line ka ho to return aur curly brackets {} skip kar saktay hain.",
                code: `const multiply = (x, y) => x * y;\nconsole.log(multiply(4, 5)); // 20`,
            },
            {
                name: "With One Parameter",
                detail: "Agar aik he parameter ho to () laganay ki zarurat nahi.",
                code: `const square = x => x * x;\nconsole.log(square(6)); // 36`,
            },
            {
                name: "No Parameters",
                detail: "Agar koi parameter nahi ho to empty () likhna zaruri hai.",
                code: `const hello = () => "Hi there!";\nconsole.log(hello()); // Hi there!`,
            },
        ],
    },
    {
        title: "3. Higher Order Functions (HOF)",
        description:
            "Higher order functions woh hoti hain jo kisi aur function ko parameter ke tor pe leti hain ya return karti hain.",
        points: [
            {
                name: "Passing a Function",
                detail: "map() jese functions array ke har item pe function apply karte hain.",
                code: `const numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6]`,
            },
            {
                name: "Returning a Function",
                detail: "Ek function dusra function return bhi kar sakta hai.",
                code: `function greet(name) {\n  return function() {\n    console.log("Hello, " + name);\n  };\n}\nconst greetAli = greet("Ali");\ngreetAli(); // Hello, Ali`,
            },
        ],
    },
];

const JavaScriptFunctions = () => {
    return (
        <div className="bg-white text-gray-800 min-h-screen py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-10">
                🔧 JavaScript Functions: Basics, Arrow & HOF
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">
                {sections.map((section, i) => (
                    <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6"
                    >
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                            {section.title}
                        </h2>
                        <p className="text-gray-600 mb-4">{section.description}</p>

                        {section.points.map((point, j) => (
                            <div key={j} className="mb-5">
                                <h3 className="text-lg font-medium text-gray-800">
                                    🔹 {point.name}
                                </h3>
                                <p className="text-gray-700">{point.detail}</p>
                                {point.code && (
                                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg mt-2 overflow-auto">
                                        <code>{point.code}</code>
                                    </pre>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JavaScriptFunctions;
