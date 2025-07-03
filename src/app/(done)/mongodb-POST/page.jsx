"use client";
import React from "react";

const hardcodedPostCode = `import mongoose from "mongoose";
import MongoDBURl from "../../../MongoDB/mongodb-connect";
import userModel from "../../../MongoDB/userModel";
import { NextResponse } from "next/server";

export const POST = async () => {
  await mongoose.connect(MongoDBURl);

  const newUser = new userModel({
    name: "Ali",
    role: "Tester",
    Skills: "PyTest",
  });

  const user = await newUser.save();
  return NextResponse.json({ result: user });
};`;

const dynamicPostCode = `import mongoose from "mongoose";
import MongoDBURl from "../../../MongoDB/mongodb-connect";
import userModel from "../../../MongoDB/userModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await mongoose.connect(MongoDBURl);

  const payload = await req.json();
  const newUser = new userModel(payload);

  const user = await newUser.save();
  return NextResponse.json({ result: user }, { status: 200 });
};`;

const MongodbPOST = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-xl shadow-md space-y-6">
            <h1 className="text-3xl font-bold text-blue-700">🧪 MongoDB POST API — Mongoose + Next.js</h1>

            <p className="text-gray-700 leading-relaxed">
                This <code className="bg-gray-100 px-1 rounded">POST</code> API lets you insert new users into your MongoDB database. Below are two methods:
            </p>

            {/* Hardcoded API */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">📌 Example 1 — Hardcoded User Data</h2>
                <ul className="list-disc list-inside text-gray-700 mb-3">
                    <li>Connects to MongoDB Atlas</li>
                    <li>Saves fixed user data: <strong>Ali</strong> / <strong>Tester</strong> / <strong>PyTest</strong></li>
                    <li>Returns the inserted user object</li>
                </ul>
                <pre className="bg-gray-100 text-sm text-gray-800 font-mono rounded-md p-4 overflow-x-auto border border-gray-300 shadow-sm">
                    <code>{hardcodedPostCode}</code>
                </pre>
            </div>

            {/* Dynamic API */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">📌 Example 2 — Dynamic User Data from Request</h2>
                <ul className="list-disc list-inside text-gray-700 mb-3">
                    <li>Accepts dynamic payload using <code>await req.json()</code></li>
                    <li>Can be used with frontend forms or API clients</li>
                    <li>Returns saved user data on success</li>
                </ul>
                <pre className="bg-gray-100 text-sm text-gray-800 font-mono rounded-md p-4 overflow-x-auto border border-gray-300 shadow-sm">
                    <code>{dynamicPostCode}</code>
                </pre>
            </div>

            {/* Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md text-yellow-700 text-sm">
                <strong>Note:</strong> Prefer the dynamic version in production. It gives flexibility to receive data from user input (like forms, fetch calls, etc).
            </div>
        </div>
    );
};

export default MongodbPOST;
