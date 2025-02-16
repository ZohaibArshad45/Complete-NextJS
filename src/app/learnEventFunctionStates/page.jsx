'use client'
import React, { useState } from 'react'

const LearnEventFunctionState = () => {

  let enventcode = `
  <button onClick={() => alert("Hello!")} >
      Event
  </button>`

  let functioncode = `
    // Function without parameter
  const handleClick = () => {
    alert("Learn About Function")
  }

<button onClick={handleClick}>
    Function without parameter
</button>`

  let functionWithParametercode = `
    // Function with parameter
  const handleClickWithParam = (name) => {
    alert("Learn About Function with parameter:" + name})
  }

<button onClick={() => handleClickWithParam('Zohaib')}">
  Function with parameter
</button>`

  let statecode = `
  // State
  const [number, setNumber] = useState(0)

<div>
    <p>{number}</p>
    <button  onClick={() => setNumber((prev) => prev + 1)}>
      ➕ Increase
    </button>

    <button onClick={() => setNumber((prev) => Math.max(0, prev - 1))}>
      ➖ Decrease
    </button>
</div>`


  // Function without parameter
  const handleClick = () => {
    alert("Learn About Function")
  }

  // Function with parameter
  const handleClickWithParam = (name) => {
    alert(`Learn About Function with parameter: ${name}`)
  }

  // State
  const [number, setNumber] = useState(0)

  return (
    <div className='flex flex-col items-center py-10 gap-6 bg-gray-100 min-h-screen px-4'>
      <h1 className='text-3xl font-bold text-blue-700 text-center'>🚀 Learn Event Functions & State</h1>
      <p className="text-gray-600 text-center max-w-lg">
        📌 Understand event functions and React state management with simple examples.
      </p>

      {/* ============= Event ============ */}
      <button
        onClick={() => alert("Hello!")}
        className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition">
        🔥 Event
      </button>

      <pre className='bg-gray-800 text-white rounded-xl px-4 py-2 w-full overflow-x-auto'>
        Code:📋
        <code className=' w-full overflow-x-auto'> {enventcode}</code>
      </pre>

      {/* ========== Function without parameter =========== */}
      <button
        onClick={handleClick}
        className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition">
        📌 Function without parameter
      </button>

      <pre className='bg-gray-800 text-white rounded-xl px-4 py-2 w-full overflow-x-auto'>
        Code:📋
        <code className=' w-full overflow-x-auto'> {functioncode}</code>
      </pre>


      {/* ===============  Function with parameter ============= */}
      <button
        onClick={() => handleClickWithParam('Zohaib')}
        className="bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition">
        🧑‍💻 Function with parameter
      </button>

      <pre className='bg-gray-800 text-white rounded-xl px-4 py-2 w-full overflow-x-auto'>
        Code:📋
        <code className=' w-full overflow-x-auto'> {functionWithParametercode}</code>
      </pre>

      {/* ================== State Display =============== */}
      <div className="flex flex-col items-center">
        <p className="text-2xl font-semibold text-gray-800">Counter: {number}</p>

        {/* State Buttons */}
        <div className='flex items-center justify-center gap-4 mt-3'>
          <button
            onClick={() => setNumber((prev) => prev + 1)}
            className="bg-teal-600 hover:bg-teal-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition">
            ➕ Increase
          </button>

          <button
            onClick={() => setNumber((prev) => Math.max(0, prev - 1))}
            className="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition">
            ➖ Decrease
          </button>
        </div>
      </div>

      <pre className='bg-gray-800 text-white rounded-xl px-4 py-2 w-full overflow-x-auto'>
        Code:📋
        <code className=' w-full overflow-x-auto'> {statecode}</code>
      </pre>

    </div>
  )
}

export default LearnEventFunctionState
