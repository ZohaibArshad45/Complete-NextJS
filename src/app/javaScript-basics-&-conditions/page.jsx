"use client";
import React from "react";

const sections = [
  {
    title: "1. var, let, const",
    description:
      "Yeh teen different tareeqay hain JavaScript mein variable bananay ke. Har ek ka apna scope aur rules hota hai.",
    points: [
      {
        name: "var",
        detail:
          "var function scoped hota hai. Isay dobara declare aur reassign kiya ja sakta hai (lekin avoid karna chahiye).",
        code: `var x = 10;\nx = 20;\nvar x = 30; // ✅ Re-declaration allowed`,
      },
      {
        name: "let",
        detail:
          "let block scoped hota hai. Isay dobara assign kiya ja sakta hai, lekin dobara declare nahi kar saktay same block mein.",
        code: `let y = 5;\ny = 15; // ✅\nlet y = 25; // ❌ Error`,
      },
      {
        name: "const",
        detail: "const bhi block scoped hota hai. Isay na to reassign kar saktay hain, na dobara declare.",
        code: `const z = 100;\nz = 200; // ❌ Error`,
      },
    ],
  },
  {
    title: "2. Hoisting",
    description:
      "var declarations top par chali jati hain (hoist hoti hain), jabke let aur const Temporal Dead Zone mein hoti hain.",
    points: [
      {
        name: "var Hoisting",
        detail: "var declare honay se pehle undefined show hota hai:",
        code: `console.log(a); // undefined\nvar a = 10;`,
      },
      {
        name: "let/const Hoisting",
        detail:
          "let ya const use karne se pehle error throw hota hai:",
        code: `console.log(b); // ❌ ReferenceError\nlet b = 20;`,
      },
    ],
  },
  {
    title: "3. if / else Conditions",
    description: "Agar koi condition true hai to kuch karo, warna else block chalay ga.",
    points: [
      {
        name: "Example",
        detail: "Check karo number positive hai ya nahi:",
        code: `const num = -3;\nif(num > 0){\n  console.log("Positive");\n} else {\n  console.log("Not positive");\n}`,
      },
    ],
  },
  {
    title: "4. Ternary Operator",
    description: "Short form hai if/else condition ka — aik line mein likh saktay hain.",
    points: [
      {
        name: "Example",
        detail: "Age check kar ke message assign karo:",
        code: `const age = 18;\nconst msg = age >= 18 ? "Adult" : "Minor";`,
      },
    ],
  },
  {
    title: "5. Logical Operators",
    description:
      "&& dono conditions true hoon to true return karta hai. || mein agar ek bhi true ho to true return hota hai.",
    points: [
      {
        name: "Example",
        detail: "Multiple conditions combine karke check karna:",
        code: `if(isLoggedIn && isAdmin){\n  console.log("Welcome Admin");\n}\n\nif(age > 18 || hasPermission){\n  console.log("Access Granted");\n}`,
      },
    ],
  },
  {
    title: "6. Optional Chaining",
    description:
      "Kisi object ke nested property ko safely access karne ke liye ?. use karte hain — agar undefined ho to crash nahi hota.",
    points: [
      {
        name: "Example",
        detail: "Agar user ka kuch data missing ho to bhi app crash nahi karegi:",
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

export default JavaScriptIntro
