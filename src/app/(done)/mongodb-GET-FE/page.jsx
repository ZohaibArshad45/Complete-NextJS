'use client'
import React from 'react';

const backendcode = `import mongoose from "mongoose";
import MongoDBURl from "../../../MongoDB/mongodb-connect";
import userModel from "../../../MongoDB/userModel";
import { NextResponse } from "next/server";

export const GET = async () => {
    await mongoose.connect(MongoDBURl)
    const userData = await userModel.find()
    return NextResponse.json({ result: userData })
};`;

const frontendcode = `import React from 'react';

// ✅ Server-side function to fetch data
const getdata = async () => {
    const res = await fetch("http://localhost:3000/api/mongodb-connection");
    const data = await res.json();
    return data.result;
};

const MongodbGETFE = async () => {
    const data = await getdata();

    return (
        <div>
            <h2>Fetched Users:</h2>
            {data.length > 0 ? (
                data.map((d, i) => (
                    <div key={i}>
                        <p>Name: {d.name}</p>
                        <p>Role: {d.role}</p>
                        <p>Skills: {d.skills}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>No data found</p>
            )}
        </div>
    );
};

export default MongodbGETFE;`;

const getdata = async () => {
    const res = await fetch("http://localhost:3000/api/mongodb-connection");
    const data = await res.json();
    return data.result;
};

const MongodbGETFE = async () => {
    const data = await getdata();

    return (
        <div className="p-6 min-h-screen bg-white text-black">
            <h2 className="text-2xl font-bold mb-6 text-center">📦 Fetched Users</h2>

            <div className="max-w-2xl mx-auto space-y-4">
                {data.length > 0 ? (
                    data.map((d, i) => (
                        <div key={i} className="border border-gray-300 p-4 rounded shadow-sm">
                            <p><strong>👤 Name:</strong> {d.name}</p>
                            <p><strong>💼 Role:</strong> {d.role}</p>
                            <p><strong>🛠️ Skills:</strong> {d.skills}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-red-500">No data found</p>
                )}
            </div>

            <div className="mt-10">
                <h3 className="text-lg font-semibold mb-2">🔧 Backend Code (GET API)</h3>
                <pre className="bg-gray-100 text-sm text-black p-4 rounded overflow-auto">
                    <code>{backendcode}</code>
                </pre>

                <h3 className="text-lg font-semibold mt-6 mb-2">⚛️ Frontend Code (Data Fetch + Display)</h3>
                <pre className="bg-gray-100 text-sm text-black p-4 rounded overflow-auto">
                    <code>{frontendcode}</code>
                </pre>
            </div>
        </div>
    );
};

export default MongodbGETFE;
