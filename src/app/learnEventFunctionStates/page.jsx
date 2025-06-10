'use client';
import React, { useState } from 'react';

const LearnEventFunctionState = () => {
  const [number, setNumber] = useState(0);

  // Functions
  const handleClick = () => alert("Learn About Function");
  const handleClickWithParam = (name) =>
    alert(`Function with parameter: ${name}`);

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-4xl font-extrabold text-center text-blue-700">
          🚀 Learn Events, Functions & State
        </h1>
        <p className="text-center text-gray-600 max-w-xl mx-auto">
          React ke basic concepts jaise events, function handling aur state
          ko samjho with Roman Urdu explanations.
        </p>

        {/* Event Example */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold">🔥 1. Simple Event</h2>
          <button
            onClick={() => alert("Hello!")}
            className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded shadow transition"
          >
            Trigger Event
          </button>
          <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded overflow-x-auto">
{`<button onClick={() => alert("Hello!")}>
  Event
</button>`}
          </pre>
        </section>

        {/* Function without parameter */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold">📌 2. Function without Parameter</h2>
          <button
            onClick={handleClick}
            className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded shadow transition"
          >
            Call Function
          </button>
          <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded overflow-x-auto">
{`const handleClick = () => {
  alert("Learn About Function");
}

<button onClick={handleClick}>
  Function without parameter
</button>`}
          </pre>
        </section>

        {/* Function with parameter */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold">🧠 3. Function with Parameter</h2>
          <button
            onClick={() => handleClickWithParam("Zohaib")}
            className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded shadow transition"
          >
            Pass Parameter
          </button>
          <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded overflow-x-auto">
{`const handleClickWithParam = (name) => {
  alert("Learn About Function with parameter: " + name);
}

<button onClick={() => handleClickWithParam('Zohaib')}>
  Function with parameter
</button>`}
          </pre>
        </section>

        {/* State Example */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">📈 4. State Management</h2>
          <p className="text-lg font-semibold">Counter: {number}</p>
          <div className="flex gap-4">
            <button
              onClick={() => setNumber((prev) => prev + 1)}
              className="bg-teal-600 hover:bg-teal-800 text-white py-2 px-4 rounded shadow transition"
            >
              ➕ Increase
            </button>
            <button
              onClick={() => setNumber((prev) => Math.max(0, prev - 1))}
              className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded shadow transition"
            >
              ➖ Decrease
            </button>
          </div>
          <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded overflow-x-auto">
{`const [number, setNumber] = useState(0);

<div>
  <p>{number}</p>
  <button onClick={() => setNumber(prev => prev + 1)}>➕</button>
  <button onClick={() => setNumber(prev => Math.max(0, prev - 1))}>➖</button>
</div>`}
          </pre>
        </section>
      </div>
    </div>
  );
};

export default LearnEventFunctionState;
