"use client";
import Link from "next/link";
import React from "react";

const MongoDBConnection = () => {
  const env = `# myusername=******
# mypassword=******
MONGODB_URL=mongodb+srv://myusername:mypassword@cluster10.lp9bv.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster10`;

  const conStr = `const MongoDBURl = process.env.MONGODB_URL;

if (!MongoDBURl) {
  throw new Error("❌ MONGODB_URL is not defined in environment variables.");
}

export default MongoDBURl;`;

  const userModel = `import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  Skills: String,
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;`;

  const apiPath = `import mongoose from "mongoose";
import MongoDBURl from "../../../MongoDB/mongodb-connect";
import userModel from "../../../MongoDB/userModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  await mongoose.connect(MongoDBURl);
  const userData = await userModel.find();
  return NextResponse.json({ result: userData });
};`;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white border border-gray-200 rounded-2xl shadow-md space-y-8">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-700 flex items-center justify-center gap-2">
          🚀 MongoDB Connection Setup Guide
        </h1>
        <Link
          href="/api/mongodb-connection"
          className="mt-4 inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition"
        >
          🔍 Test GET Route
        </Link>
      </div>

      {/* Step 1 */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          📁 Step 1: Setup <code>.env.local</code>
        </h2>
        <pre className="bg-gray-100 text-sm text-gray-800 font-mono rounded-md p-4 overflow-x-auto border border-gray-300 shadow-sm">
          <code>{env}</code>
        </pre>
      </section>

      {/* Step 2 */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          🔗 Step 2: MongoDB Connection File
        </h2>
        <pre className="bg-gray-100 text-sm text-gray-800 font-mono rounded-md p-4 overflow-x-auto border border-gray-300 shadow-sm">
          <code>{conStr}</code>
        </pre>
      </section>

      {/* Step 3 */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          📦 Step 3: Create Mongoose User Model
        </h2>
        <pre className="bg-gray-100 text-sm text-gray-800 font-mono rounded-md p-4 overflow-x-auto border border-gray-300 shadow-sm">
          <code>{userModel}</code>
        </pre>
      </section>

      {/* Step 4 */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          🧪 Step 4: Create API Route (GET Users)
        </h2>
        <pre className="bg-gray-100 text-sm text-gray-800 font-mono rounded-md p-4 overflow-x-auto border border-gray-300 shadow-sm">
          <code>{apiPath}</code>
        </pre>
        <div className="text-center">
          <Link
            href="/api/mongodb-connection"
            className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition"
          >
            ✅ Run GET API
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MongoDBConnection;
