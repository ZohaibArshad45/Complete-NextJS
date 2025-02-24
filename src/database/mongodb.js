import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("❌ MongoDB URI is missing in environment variables");
}

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) return; // Avoid multiple connections

    try {
        await mongoose.connect(MONGODB_URI); // No extra options needed
        isConnected = true;
        console.log("✅ MongoDB Connected!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed!", error);
        throw new Error("Database connection failed");
    }
};
