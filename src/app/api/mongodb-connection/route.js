import mongoose from "mongoose"
import { NextResponse } from "next/server"
import DBString from "../../../database/connection/ConnectionString"
import UserModel from "../../../database/Models/user"

export const GET = async ()=>{

    await mongoose.connect(DBString)
    const UserData = await UserModel.find()

    return NextResponse.json({Result : UserData})
}