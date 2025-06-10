"use client";
import React from "react";

const sections = [
    {
        title: "1. onClick",
        description: "Jab user kisi button ya element par click karta hai, to `onClick` event trigger hota hai.",
        code: `function handleClick() {\n  alert("Button clicked!");\n}\n\n<button onClick={handleClick}>Click Me</button>`
    },
    {
        title: "2. onBlur",
        description: "`onBlur` tab chalta hai jab kisi input field se focus remove hota hai (e.g. user bahar click kare).",
        code: `<input type="text" onBlur={() => alert("Input lost focus")} />`
    },
    {
        title: "3. onChange",
        description: "`onChange` tab fire hota hai jab input ka value change hota hai.",
        code: `function handleChange(e) {\n  console.log("Input:", e.target.value);\n}\n\n<input type="text" onChange={handleChange} />`
    },
    {
        title: "4. onFocus",
        description: "`onFocus` tab chalta hai jab user kisi input pe click kare ya tab kare.",
        code: `<input type="text" onFocus={() => console.log("Input focused")} />`
    },
    {
        title: "5. setTimeout()",
        description: "`setTimeout` ek bar delay ke baad code run karta hai.",
        code: `setTimeout(() => {\n  console.log("3 second ke baad run hua");\n}, 3000);`
    },
    {
        title: "6. setInterval()",
        description: "`setInterval` bar bar code run karta hai har kuch milliseconds ke interval pe.",
        code: `setInterval(() => {\n  console.log("Har 2 second me run ho raha hai");\n}, 2000);`
    },
];

const JavaScriptEvents = () => {
    return (
        <div className="bg-white text-gray-800 min-h-screen py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
                🧠 JavaScript Event Listeners & Timers
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">
                {sections.map((sec, i) => (
                    <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-2">{sec.title}</h2>
                        <p className="text-gray-700 mb-3">{sec.description}</p>
                        <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg overflow-auto">
                            <code>{sec.code}</code>
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JavaScriptEvents;
