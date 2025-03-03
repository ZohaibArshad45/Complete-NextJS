import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
    throw new Error("❌ MONGODB_URL is missing in environment variables");
}

const connectToDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL); // No need for extra options
        console.log("✅ MongoDB connected successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1); // Stop the app if the database fails to connect
    }
};

export default connectToDB;
