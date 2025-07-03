import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    role:String,
    Skills:String,
})

const userModel = mongoose.models.User || mongoose.model("User", userSchema)
export default userModel