"use client";
import React from "react";

const asyncTopics = [
    {
        title: "1. Callbacks",
        description:
            "Function jo kisi kaam ke complete hone ke baad chalti hai. Ye async programming ka basic concept hai.",
        code: `function fetchData(callback) {\n  setTimeout(() => {\n    callback("Data received");\n  }, 2000);\n}\n\nfetchData((result) => {\n  console.log(result);\n});`,
    },
    {
        title: "2. Callback Hell",
        description:
            "Jab multiple callbacks nested hoti hain, to code mushkil ho jata hai samajhna. Isko 'callback hell' kehte hain.",
        code: `setTimeout(() => {\n  console.log("1st step");\n  setTimeout(() => {\n    console.log("2nd step");\n    setTimeout(() => {\n      console.log("3rd step");\n    }, 1000);\n  }, 1000);\n}, 1000);`,
    },
    {
        title: "3. Promises",
        description:
            "Promises better way hain async code likhne ke liye. Ye 3 states mein hoti hain: pending, resolved, rejected.",
        code: `const fetchData = new Promise((resolve, reject) => {\n  let success = true;\n  if(success){\n    resolve("Data loaded");\n  } else {\n    reject("Error occurred");\n  }\n});\n\nfetchData.then(res => console.log(res)).catch(err => console.error(err));`,
    },
    {
        title: "4. Promise APIs",
        description:
            "`Promise.all`, `Promise.race`, `Promise.allSettled` etc. multiple promises handle karne ke liye use hoti hain.",
        code: `const p1 = Promise.resolve(1);\nconst p2 = Promise.resolve(2);\nPromise.all([p1, p2]).then(values => {\n  console.log(values); // [1, 2]\n});`,
    },
    {
        title: "5. Promise Chain",
        description:
            "Ek promise complete hone ke baad dusra promise chain karke call karna.",
        code: `fetchData()\n  .then(res => {\n    console.log("Step 1 done");\n    return doNext();\n  })\n  .then(() => {\n    console.log("Step 2 done");\n  })\n  .catch(err => console.error(err));`,
    },
];

const AsyncJavaScriptPage = () => {
    return (
        <div className="bg-white text-gray-800 min-h-screen py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
                ⚙️ 7. Asynchronous JavaScript
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">
                {asyncTopics.map((section, i) => (
                    <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6"
                    >
                        <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                            🔹 {section.title}
                        </h2>
                        <p className="text-gray-700 mb-3">{section.description}</p>
                        <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg overflow-auto">
                            <code>{section.code}</code>
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AsyncJavaScriptPage;
