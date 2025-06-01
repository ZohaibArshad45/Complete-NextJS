import mongoose from "mongoose"
import { NextResponse } from "next/server"
import DBString from "../../../../database/connection/ConnectionString"
import UserModel from "../../../../database/Models/user"


export const PUT = async (req, value)=>{
    // for id get
    const userID = value.params.MongoPutAPI

    const id = {_id:userID}
    // console.log(id)

    //for data
    // const payload = await req.json()
    // console.log(payload)

    await mongoose.connect(DBString)
    const resu = await UserModel.findById(id)

    return NextResponse.json({result : resu , success:true})

}