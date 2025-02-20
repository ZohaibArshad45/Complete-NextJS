'use client'
import React, { useState } from 'react'

const HowIntePOSTAPI = () => {
    const [name, setname] = useState("")
    const [id, setid] = useState("")

    const signup = async () => {
        console.log(name, id)

        // 🔹 Ensure both fields are filled
        if (!name || !id) {
            alert("❌ Please enter both name and ID!")
            return;
        }
        
        // 🔹 Send POST request to API
        try {
            const res = await fetch('http://localhost:3000/api/post-route', {
                method: 'POST',
                body: JSON.stringify({ name, id }) 
            });
            const data = await res.json();
            console.log("✅ Response:", data);   // check out inspect ==> network ==> route name ==> paylaod
        } catch (error) {
            console.error("❌ Error:", error);
        }
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-600">📡 Integrate POST API in Next.js</h1>

            {/* Input Fields */}
            <div className="mt-4">
                <input  type="text"  value={name}  placeholder="Enter your name" onChange={(e) => setname(e.target.value)} className="border p-2 rounded-lg w-full mb-3"/>
                <input  type="text"  value={id}  placeholder="Enter your ID" onChange={(e) => setid(e.target.value)} className="border p-2 rounded-lg w-full mb-3"/>
            </div>

            {/* Submit Button */}
            <button onClick={signup} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition" >
            Sign Up
            </button>
        </div>
    )
}

export default HowIntePOSTAPI
