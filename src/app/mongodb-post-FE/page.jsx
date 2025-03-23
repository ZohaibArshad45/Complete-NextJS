'use client'
import React, { useState } from 'react'

const MongodbpostFE = () => {

    const code = `'use client'
import React, { useState } from 'react'

const MongodbpostFE = () => {
    const [name , setname] = useState("")
    const [depart , setdepart] = useState("")
    const [uni , setuni] = useState("")

    const handle = async () => {
        // const data = await fetch('http://localhost:3000/api/mongoPOST', {
        const data = await fetch('https://complete-nextjs-ten.vercel.app//api/mongoPOST', {
            method : "POST",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            body : JSON.stringify({ name, depart, uni })
        })
        const newdata = await data.json()
        if (newdata.success) {
            alert("User Data Saved Successfully")
            setname("")
            setdepart("")
            setuni("")
        } else {
            alert("Try Again")
        }
    }

    return (
        <div className="flex flex-col items-center  min-h-screen bg-gray-100 pt-14">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">Mongodb Post Method Integration with Frontend</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setname(e.target.value)} 
                    placeholder="Enter your name"
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input 
                    type="text" 
                    value={depart} 
                    onChange={(e) => setdepart(e.target.value)} 
                    placeholder="Enter your Department Name"
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input 
                    type="text" 
                    value={uni} 
                    onChange={(e) => setuni(e.target.value)} 
                    placeholder="Enter your Uni Name"
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <button 
                    onClick={handle} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default MongodbpostFE
`


    const [name, setname] = useState("")
    const [depart, setdepart] = useState("")
    const [uni, setuni] = useState("")

    const handle = async () => {
        // const data = await fetch('http://localhost:3000/api/mongoPOST', {
        const data = await fetch('https://complete-nextjs-ten.vercel.app//api/mongoPOST', {
            method: "POST",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            body: JSON.stringify({ name, depart, uni })
        })
        const newdata = await data.json()
        if (newdata.success) {
            alert("User Data Saved Successfully")
            setname("")
            setdepart("")
            setuni("")
        } else {
            alert("Try Again")
        }
    }

    return (
        <div className="flex flex-col items-center  min-h-screen bg-gray-100 pt-14">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">Mongodb Post Method Integration with Frontend</h1>

            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    value={depart}
                    onChange={(e) => setdepart(e.target.value)}
                    placeholder="Enter your Department Name"
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    value={uni}
                    onChange={(e) => setuni(e.target.value)}
                    placeholder="Enter your Uni Name"
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    onClick={handle}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition">
                    Submit
                </button>
            </div>
            <br /> <br />

            <div className="mt-6 w-full max-w-3xl">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">Code of this Page:</h1>

                <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg shadow-lg overflow-x-auto">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    )
}

export default MongodbpostFE
