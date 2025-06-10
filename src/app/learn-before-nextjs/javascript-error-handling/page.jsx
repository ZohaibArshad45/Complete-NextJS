"use client";
import React from "react";

const errorHandlingExamples = [
    {
        title: "1. Try / Catch (Synchronous)",
        description:
            "Jab aapko lagta hai koi line error throw kar sakti hai, use `try` block me rakho. Agar error aaye, to `catch` block usko handle karega.",
        code: `try {\n  let result = 10 / 0;\n  console.log(result);\n} catch (error) {\n  console.error("Error aya:", error);\n}`,
    },
    {
        title: "2. Try / Catch (Async + Await)",
        description:
            "Async code me `await` ke errors bhi `try/catch` ke zariye pakre ja sakte hain.",
        code: `async function fetchData() {\n  try {\n    const res = await fetch("https://fakeapi.io/data");\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error("Fetch failed:", err);\n  }\n}\n\nfetchData();`,
    },
    {
        title: "3. Throw Custom Error",
        description:
            "Aap manually bhi error `throw` kar sakte ho kisi condition pe.",
        code: `function divide(a, b) {\n  if (b === 0) {\n    throw new Error("0 se divide nahi kar sakte!");\n  }\n  return a / b;\n}\n\ntry {\n  console.log(divide(5, 0));\n} catch (e) {\n  console.error("Custom error:", e.message);\n}`,
    },
];

const TryCatchPage = () => {
    return (
        <div className="bg-white text-gray-800 min-h-screen py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
                🛠️ 9. Try / Catch - Error Handling
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">
                {errorHandlingExamples.map((item, i) => (
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

export default TryCatchPage;
