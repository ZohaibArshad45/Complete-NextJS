"use client";
import React from "react";

const sections = [
  {
    title: "1. var, let, const",
    description:
      "These are different ways to declare variables in JavaScript. Each has its own rules:",
    points: [
      {
        name: "var",
        detail:
          "`var` is function-scoped. Can be re-declared and reassigned (not recommended).",
        code: `var x = 10;\nx = 20;\nvar x = 30; // ✅ Re-declaration allowed`,
      },
      {
        name: "let",
        detail:
          "`let` is block-scoped. Can be reassigned but not re-declared in the same scope.",
        code: `let y = 5;\ny = 15; // ✅\nlet y = 25; // ❌ Error`,
      },
      {
        name: "const",
        detail: "`const` is block-scoped. Cannot be reassigned or re-declared.",
        code: `const z = 100;\nz = 200; // ❌ Error`,
      },
    ],
  },
  {
    title: "2. Hoisting",
    description:
      "`var` declarations are hoisted (moved to top), but `let` and `const` are hoisted in a 'temporal dead zone'.",
    points: [
      {
        name: "var Hoisting",
        detail: "`var` is undefined when accessed before declaration:",
        code: `console.log(a); // undefined\nvar a = 10;`,
      },
      {
        name: "let/const Hoisting",
        detail:
          "`let` and `const` throw error if used before declared:",
        code: `console.log(b); // ❌ ReferenceError\nlet b = 20;`,
      },
    ],
  },
  {
    title: "3. if / else Conditions",
    description: "Basic conditional structure to control logic flow.",
    points: [
      {
        name: "Example",
        detail: "Check if number is positive or not:",
        code: `const num = -3;\nif(num > 0){\n  console.log("Positive");\n} else {\n  console.log("Not positive");\n}`,
      },
    ],
  },
  {
    title: "4. Ternary Operator",
    description: "A shorter way to write if/else in one line.",
    points: [
      {
        name: "Example",
        detail: "Assign based on age condition:",
        code: `const age = 18;\nconst msg = age >= 18 ? "Adult" : "Minor";`,
      },
    ],
  },
  {
    title: "5. Logical Operators",
    description:
      "`&&` returns true if both are true. `||` returns true if at least one is true.",
    points: [
      {
        name: "Example",
        detail: "Combine conditions with && and ||",
        code: `if(isLoggedIn && isAdmin){\n  console.log("Welcome Admin");\n}\n\nif(age > 18 || hasPermission){\n  console.log("Access Granted");\n}`,
      },
    ],
  },
  {
    title: "6. Optional Chaining",
    description:
      "Use `?.` to safely access nested properties without breaking the app if `undefined`.",
    points: [
      {
        name: "Example",
        detail: "Prevent errors from undefined objects:",
        code: `const user = { profile: { name: "Ali" } };\nconsole.log(user.profile?.name); // Ali\nconsole.log(user.settings?.theme); // undefined (✅ No crash)`,
      },
    ],
  },
];

const JavaScriptIntro = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        📘 JavaScript Basics & Conditions
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

export default JavaScriptIntro;
