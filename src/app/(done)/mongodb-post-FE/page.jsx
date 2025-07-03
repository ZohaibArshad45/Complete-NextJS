'use client'
import React, { useState } from 'react'

const backendcode = `import mongoose from "mongoose";
import MongoDBURl from "../../../MongoDB/mongodb-connect";
import userModel from "../../../MongoDB/userModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    await mongoose.connect(MongoDBURl);
    const payload = await req.json();
    //   const { name, role, skills } = payload;


    const newUser = new userModel(payload);
    const user = await newUser.save();

    return NextResponse.json({ result: user, success: true });
};`;

const frontendcode = `'use client'
import React, { useState } from 'react'

const MongodbPostFE = () => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [skills, setSkills] = useState("");

    const handlebtn = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/mongodb-POST', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, role, skills }),
            });

            const data = await response.json();

            if (data.success) {
                alert("✅ Data Saved Successfully");
                setName("");
                setRole("");
                setSkills("");
            } else {
                alert("❌ Something went wrong, please try again.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("❌ Server Error");
        }
    };

    return (
        <div className="p-4 min-h-screen">
            <h2 className="text-xl font-semibold mb-4">Submit Your Details</h2>

            <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block mb-2 p-2 text-black rounded border border-gray-300 w-full"
            />

            <input
                type="text"
                placeholder="Enter Your Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="block mb-2 p-2 text-black rounded border border-gray-300 w-full"
            />

            <input
                type="text"
                placeholder="Enter Your Skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="block mb-4 p-2 text-black rounded border border-gray-300 w-full"
            />

            <button
                onClick={handlebtn}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full"
            >
                Submit
            </button>
        </div>
    );
};

export default MongodbPostFE;`;

const MongodbPostFE = () => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [skills, setSkills] = useState("");

    const handlebtn = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/mongodb-POST', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, role, skills }),
            });

            const data = await response.json();

            if (data.success) {
                alert("✅ Data Saved Successfully");
                setName("");
                setRole("");
                setSkills("");
            } else {
                alert("❌ Something went wrong, please try again.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("❌ Server Error");
        }
    };

    return (
        <div className="p-6 min-h-screen bg-white text-black">
            <h2 className="text-2xl font-bold mb-6 text-center">🚀 Submit Your Details</h2>

            <div className="max-w-md mx-auto">
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block mb-3 p-3 text-black rounded border border-gray-300 w-full"
                />

                <input
                    type="text"
                    placeholder="Enter Your Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="block mb-3 p-3 text-black rounded border border-gray-300 w-full"
                />

                <input
                    type="text"
                    placeholder="Enter Your Skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="block mb-4 p-3 text-black rounded border border-gray-300 w-full"
                />

                <button
                    onClick={handlebtn}
                    className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition"
                >
                    Submit
                </button>
            </div>

            <div className="mt-10">
                <h3 className="text-lg font-semibold mb-2">📦 Backend Code (API Route)</h3>
                <pre className="bg-gray-100 text-sm text-black p-4 rounded overflow-auto">
                    <code>{backendcode}</code>
                </pre>

                <h3 className="text-lg font-semibold mt-6 mb-2">🧠 Frontend Code (React Form)</h3>
                <pre className="bg-gray-100 text-sm text-black p-4 rounded overflow-auto">
                    <code>{frontendcode}</code>
                </pre>
            </div>
        </div>
    );
};

export default MongodbPostFE;
