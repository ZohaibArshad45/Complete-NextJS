// make it with details thanku
'use client';
import React, { useState } from 'react';

// Event - Onclick Code
let Event1 = `<button onClick={() => alert("Hello!")}>
  Event
</button>`

// Function without Parameter code
let fun1 = `const handleClick = () => {
  alert("Function chal gaya!");
}
<button onClick={handleClick}>
  Call Function
</button>`

// Function with Parameter code
let fun2 = `const handleClickWithParam = (name) => {
  alert("Hello " + name);
}

<button onClick={() => handleClickWithParam('Zohaib')}>
Pass Parameter
</button>`

let fun2Explain = `Jab hume function mein value pass karni hoti hai (jaise 'Zohaib'),
toh hum onClick={() => handleClickWithParam('Zohaib')} likhtay hain. 
Agar direct likhein onClick={handleClickWithParam('Zohaib')}, 
toh wo render time pe immediately execute ho jata -- jo galat hai.`

let State1 = `const [number, setNumber] = useState(0);

<div>
  <p>{number}</p>
  <button onClick={() => setNumber(prev => prev + 1)}>➕</button>
  <button onClick={() => setNumber(prev => Math.max(0, prev - 1))}>➖</button>
</div>`
//=============================================


const LearnEventFunctionState = () => {
  const [number, setNumber] = useState(0);

  // Function examples
  // Functions without parameter
  const handleClick = () => alert("Function without parameter chal gaya!");
  // Functions with parameter
  const handleClickWithParam = (name) =>
    alert(`Hello ${name}, ye function parameter ke sath hai.`);

  return (
    <div className="min-h-screen px-4 py-10 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-4xl font-extrabold text-center text-blue-700">
          🚀 Learn Events, Functions & State in React
        </h1>
        <p className="text-center text-gray-600 max-w-xl mx-auto">
          React ke basic concepts samjho jaise events, functions (with/without parameters), aur state management.
        </p>

        {/* 🔘 1. Event Example */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-blue-600">1️⃣ Simple Event (onClick)</h2>

          <button
            onClick={() => alert("Hello!")}
            className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-5 rounded shadow transition"
          >
            🔘Btn onClick Event
          </button>
          <p className="text-sm text-gray-600">
            Jab button pe click hota hai, `alert()` call hota hai. Yeh arrow function lagana zaroori hai warna function render ke waqt hi chal jata.
          </p>
          <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg overflow-x-auto">
            {Event1}
          </pre>
        </section>

                {/* 🧪 2. Function without parameter */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-green-600">2️⃣ Function Without Parameter</h2>
          <p className="text-sm text-gray-600">
            Yeh function bina kisi input ke sirf ek alert show karta hai.
          </p>
          <button
            onClick={handleClick}
            className="bg-green-600 hover:bg-green-800 text-white py-2 px-5 rounded shadow transition"
          >
            🧪 Call Function
          </button>
          <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg overflow-x-auto">
            {fun1}
          </pre>
        </section>

                {/* 🎯 3. Function with parameter */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-purple-600">3️⃣ Function With Parameter</h2>
          <p className="text-sm text-gray-600">
            {fun2Explain}
          </p>
          <button
            onClick={() => handleClickWithParam("Zohaib")}
            className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-5 rounded shadow transition"
          >
            🎯 Pass Parameter
          </button>
          <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg overflow-x-auto">
            {fun2}
          </pre>
        </section>

        {/* 4. State Management */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-teal-600">4️⃣ State Management (Counter)</h2>
          <p className="text-sm text-gray-600">
            React ka `useState` hook allow karta hai data ko dynamic banane mein. Har bar `setNumber()` se state update hoti hai, aur UI rerender hoti hai.
            <br /> Jab hum useState use krty ha tu sb se upper 'use client' likhna pary ga, 
            warna error show ho ga
          </p>
          <p className="text-2xl font-semibold">📊 Counter: {number}</p>
          <div className="flex gap-4">
            <button
              onClick={() => setNumber((prev) => prev + 1)}
              className="bg-teal-600 hover:bg-teal-800 text-white py-2 px-5 rounded shadow transition"
            >
              ➕ Increase
            </button>
            <button
              onClick={() => setNumber((prev) => Math.max(0, prev - 1))}
              className="bg-red-600 hover:bg-red-800 text-white py-2 px-5 rounded shadow transition"
            >
              ➖ Decrease
            </button>
          </div>
          <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg overflow-x-auto">
            {State1}
          </pre>
        </section>
      </div>
    </div>
  );
};

export default LearnEventFunctionState;
