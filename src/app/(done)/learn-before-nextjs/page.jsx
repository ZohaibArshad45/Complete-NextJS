import Link from 'next/link';
import React from 'react';

const topics = [
    {
        title: '1. Basics of JavaScript',
        items: ['var', 'let', 'const', 'Hoisting of Variables'],
        link : "learn-before-nextjs/javaScript-basics-&-conditions"
    },
    {
        title: '2. Conditions in JavaScript',
        items: ['if else', 'Ternary Operator', 'Logical Operators (&&, ||)', 'Optional Chaining'],
        link : "learn-before-nextjs/javaScript-basics-&-conditions"
    },
    {
        title: '3. Functions in JavaScript',
        items: ['Arrow Functions', 'Higher Order Functions'],
        link : "learn-before-nextjs/javaScript-functions"
    },
    {
        title: '4. Arrays and Objects',
        items: [
            'Array', 'Array Destructuring',
            'Object', 'Object Destructuring',
            'Rest Operator', 'Spread Operator',
        ],
        link : "learn-before-nextjs/javascript-arrays-&-objects"
    },

    {
        title: '5. Array Methods',
        items: ['map()', 'filter()', 'reduce()', 'sort()'],
        link : "learn-before-nextjs/javascript-array-methods"
    },
    {
        title: '6. Event Listeners',
        items: ['onClick', 'onBlur', 'onChange', 'onFocus', 'setTimeout()', 'setInterval()'],
        link : "learn-before-nextjs/javascript-event-listeners"
    },
    {
        title: '7. Asynchronous JavaScript',
        items: ['Callbacks', 'Callback Hell', 'Promises', 'Promise APIs', 'Promise Chain'],
        link : "learn-before-nextjs/javascript-asynchronous "
    },
    {
        title: '8. Async / Await',
        items: ['Async Functions', 'Await Syntax'],
        link : "learn-before-nextjs/javascript-Async-&-Await"
    },
    {
        title: '9. Try / Catch',
        items: ['Error Handling with Try/Catch'],
        link : "learn-before-nextjs/javascript-error-handling"
    },
];

const BeforeNextJS = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">
                📘 Before Learning React.js / Next.js
            </h1>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic, index) => (
                    
                    <div key={index} className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition"
                    
                        
                        >
                        <h2 className="text-lg font-semibold mb-2">{topic.title}</h2>
                        <ul className="list-disc list-inside text-sm space-y-1 mb-6">
                            {topic.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <Link  href={topic.link} className='bg-blue-600 text-white p-2 rounded-2xl mt-14 hover:bg-blue-800' >Learn more</Link>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default BeforeNextJS;
