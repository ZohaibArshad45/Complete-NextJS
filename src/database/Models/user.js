import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    depart:String,
    uni:String
})

const UserModel = mongoose.models.users || mongoose.model("users", UserSchema)

export default UserModel