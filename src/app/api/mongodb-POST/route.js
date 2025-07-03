// import mongoose from "mongoose";
// import MongoDBURl from "../../../MongoDB/mongodb-connect";
// import userModel from "../../../MongoDB/userModel";
// import { NextResponse } from "next/server";

// export const POST = async ()=>{
//     await mongoose.connect(MongoDBURl)

//     const newUser = new userModel({
//         "name" : "Ali",
//         "role" : "Tester",
//         "skills" : "PyTest"
//     })

//     const user = await newUser.save()
//     return NextResponse.json({result : user})
// }

import mongoose from "mongoose";
import MongoDBURl from "../../../MongoDB/mongodb-connect";
import userModel from "../../../MongoDB/userModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
        await mongoose.connect(MongoDBURl);
        const payload = await req.json();

        const newUser = new userModel(payload);
        const user = await newUser.save();

        return NextResponse.json({ result: user, success: true });
};
