import mongoose from "mongoose"
import MongoURL from "../../../database/connection/ConnectionString"
import { NextResponse } from "next/server"
import UserModel from "../../../database/Models/user"


export const POST = async (req) => {
    await mongoose.connect(MongoURL)
    // const newUserData = new UserModel({
    //     name:'Ali',
    //     depart: "CS",
    //     uni: "QZ",
    // })

    // if you data from body Postman
    const payload = await req.json()
    const newUserData = new UserModel(payload)

    const fdata = await newUserData.save()

    return NextResponse.json({result : fdata , success:true})
}