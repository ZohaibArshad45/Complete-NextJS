import mongoose from "mongoose";
import MongoDBURl from "../../../MongoDB/mongodb-connect";
import userModel from "../../../MongoDB/userModel";
import { NextResponse } from "next/server";

export const GET = async()=>{
    await mongoose.connect(MongoDBURl)
    const userData = await userModel.find()

    return NextResponse.json({result : userData})
}