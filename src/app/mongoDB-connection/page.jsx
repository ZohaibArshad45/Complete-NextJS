import Link from 'next/link'
import React from 'react'

const MongoDBConnection = () => {

  const env = `# myusername=******
# mypassword=******
MONGODB_URL=mongodb+srv://myusername:mypassword@cluster10.lp9bv.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster10`

  const conStr = `const MongoURL = process.env.MONGODB_URL;
if (!MongoURL) {
    throw new Error("MongoDB URL is missing. Please set the MONGODB_URL environment variable.");
}
export default MongoURL;
`

  const userModel = `import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name:String,
    depart:String,
    uni:String,
    Fav:String,
})
const UserModel = mongoose.models.users || mongoose.model("users", UserSchema)
export default UserModel`

  const apiPath = `import mongoose from "mongoose"
import { NextResponse } from "next/server"
import DBString from "../../../database/connection/ConnectionString"
import UserModel from "../../../database/Models/user"

export const GET = async ()=>{
    await mongoose.connect(DBString)
    const UserData = await UserModel.find()
    return NextResponse.json({Result : UserData})
}`

  return (
    <div>
      <h1>MongoDB Connection</h1> <br />
      <Link href={"/api/mongodb-connection"} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        Check GET Route
      </Link>
      <br /> <br />

      <h1>Make first ENV File <br /> Get url from MongoDB</h1>
      <pre className="bg-cyan-500 text-white w-full rounded-lg p-2 overflow-x-auto">
        <code>{env}</code>
      </pre>
      <br />

      <h1> Database Connection String </h1>
      <pre className="bg-pink-800 text-white w-full rounded-lg p-2 overflow-x-auto">
        <code>{conStr}</code>
      </pre>

      <br />
      <h1>Make Model (make Schema) </h1>
      <pre className="bg-yellow-800 text-white w-full rounded-lg p-2 overflow-x-auto">
        <code>{userModel}</code>
      </pre>

      <br />
      <h1>Make API Path  </h1> <br />
      <Link href={"/api/mongodb-connection"} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        Check GET Route
      </Link>
      <br /> <br />
      <pre className="bg-green-800 text-white w-full rounded-lg p-2 overflow-x-auto">
        <code>{apiPath}</code>
      </pre>
      <br /> <br />
      <br /> <br />
    </div>
  )
}

export default MongoDBConnection