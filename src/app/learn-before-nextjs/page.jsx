import Link from 'next/link';
import React from 'react';

const topics = [
    {
        title: '1. Basics of JavaScript',
        items: ['var', 'let', 'const', 'Hoisting of Variables'],
        link : "javaScript-basics-&-conditions"
    },
    {
        title: '2. Conditions in JavaScript',
        items: ['if else', 'Ternary Operator', 'Logical Operators (&&, ||)', 'Optional Chaining'],
        link : "javaScript-basics-&-conditions"
    },
    {
        title: '3. Functions in JavaScript',
        items: ['Arrow Functions', 'Higher Order Functions'],
        link : "javaScript-functions"
    },
    {
        title: '4. Arrays and Objects',
        items: [
            'Array', 'Array Destructuring',
            'Object', 'Object Destructuring',
            'Rest Operator', 'Spread Operator',
        ],
        link : "javascript-arrays-&-objects"
    },

    {
        title: '5. Array Methods',
        items: ['map()', 'filter()', 'reduce()', 'sort()'],
        link : "javascript-array-methods"
    },
    {
        title: '6. Event Listeners',
        items: ['onClick', 'onBlur', 'onChange', 'onFocus', 'setTimeout()', 'setInterval()'],
        link : ""
    },
    {
        title: '7. Asynchronous JavaScript',
        items: ['Callbacks', 'Callback Hell', 'Promises', 'Promise APIs', 'Promise Chain'],
        link : ""
    },
    {
        title: '8. Async / Await',
        items: ['Async Functions', 'Await Syntax'],
        link : ""
    },
    {
        title: '9. Try / Catch',
        items: ['Error Handling with Try/Catch'],
        link : ""
    },
];

const BeforeNextJS = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">
                📘 Before Learning React.js / Next.js
            </h1>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic, index) => (
                    <Link key={index} href={topic.link} className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition"
                    >
                    <div
                        
                        >
                        <h2 className="text-lg font-semibold mb-2">{topic.title}</h2>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            {topic.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BeforeNextJS;
