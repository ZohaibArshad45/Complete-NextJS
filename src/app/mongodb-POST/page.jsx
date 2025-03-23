import Link from 'next/link';
import React from 'react';

const MongodbPOST = () => {
  const codePost = `import mongoose from "mongoose"
import MongoURL from "../../../database/connection/ConnectionString"
import { NextResponse } from "next/server"
import UserModel from "../../../database/Models/user"

export const POST = async (req) => {
    await mongoose.connect(MongoURL)
    
    // If you want to send static data
    // const newUserData = new UserModel({
    //     name: 'Ali',
    //     depart: "CS",
    //     uni: "QZ",
    // })

    // Getting data from request body (Postman)
    const payload = await req.json()
    const newUserData = new UserModel(payload)

    const fdata = await newUserData.save()
    return NextResponse.json({ result: fdata })
}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">MongoDB POST Example</h1>

      <h1 className="text-3xl font-bold text-red-600 mb-4">
        ⚠️ Output will be visible only in Postman or MongoDB!
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        This API route will store data in MongoDB. Use **Postman** to send a **POST request** or check the database directly.
      </p>

      <Link
        href="/api/mongoPOST"
        className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-md"
      >
        Visit API Route
      </Link>

      <div className="mt-6 w-full max-w-3xl">
        <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg shadow-lg overflow-x-auto">
          <code>{codePost}</code>
        </pre>
      </div>
    </div>
  );
};

export default MongodbPOST;
