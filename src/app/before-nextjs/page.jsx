import React from 'react';
import { BookOpenCheck, ChevronRight, Info } from 'lucide-react';

const topics = [
    {
        title: '1. Basics of JavaScript',
        details: 'Understand how variables work, scoping rules, and how JavaScript hoists variables.',
        items: ['var, let, const', 'Hoisting of Variables'],
    },
    {
        title: '2. Functions in JavaScript',
        details: 'Functions are first-class citizens. Learn about arrow functions and how to use functions as arguments.',
        items: ['Arrow Functions', 'Higher Order Functions'],
    },
    {
        title: '3. Arrays and Objects',
        details: 'Work with collections of data, extract values using destructuring, and manipulate them using operators.',
        items: [
            'Array & Array Destructuring',
            'Objects & Object Destructuring',
            'Rest Operator',
            'Spread Operator',
        ],
    },
    {
        title: '4. Conditions in JavaScript',
        details: 'Control the flow of your application using conditionals and logical operators.',
        items: ['if/else', 'Ternary Operator', 'Logical Operators (&&, ||)', 'Optional Chaining'],
    },
    {
        title: '5. Array Methods',
        details: 'Master built-in methods that help iterate and transform arrays effectively.',
        items: ['map()', 'filter()', 'reduce()', 'sort()'],
    },
    {
        title: '6. Event Listeners',
        details: 'Learn how to respond to user interactions like clicks, changes, or focus events.',
        items: [
            'onClick, onBlur, onChange, onFocus',
            'setTimeout(), setInterval()',
        ],
    },
    {
        title: '7. Asynchronous JavaScript',
        details: 'Understand non-blocking behavior using callbacks, promises, and async/await.',
        items: [
            'Callbacks & Callback Hell',
            'Promises & Promise APIs',
            'Promise Chains',
        ],
    },
    {
        title: '8. Async/Await',
        details: 'A cleaner way to work with promises using async/await syntax.',
        items: ['Async Functions', 'Await keyword'],
    },
    {
        title: '9. Try/Catch',
        details: 'Handle runtime errors gracefully using try/catch blocks.',
        items: ['Error Handling with Try/Catch'],
    },
];

const BeforeNextJS = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-xl">
            <h1 className="text-3xl font-bold text-blue-700 flex items-center gap-3">
                <BookOpenCheck className="text-blue-500" size={28} />
                Before Learning Next.js / React.js
            </h1>
            <p className="text-gray-600 mt-2">
                ✅ Make sure you’re confident with these core JavaScript concepts before diving into modern frameworks like React or Next.js.
            </p>

            <div className="mt-8 space-y-8">
                {topics.map((section, index) => (
                    <div key={index} className="p-5 rounded-md border border-gray-200 bg-gray-50 hover:shadow transition">
                        <h2 className="text-xl font-semibold text-purple-600 flex items-center gap-2">
                            <ChevronRight className="text-purple-500" size={20} />
                            {section.title}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1 flex items-start gap-2">
                            <Info size={16} className="mt-1 text-gray-400" />
                            {section.details}
                        </p>
                        <ul className="mt-3 ml-5 list-disc text-gray-700 space-y-1 text-sm">
                            {section.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BeforeNextJS;
