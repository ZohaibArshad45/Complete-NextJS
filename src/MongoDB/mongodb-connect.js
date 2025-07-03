const MongoDBURl = process.env.MONGODB_URL;

if (!MongoDBURl) {
    throw new Error("❌ MONGODB_URL is not defined in environment variables.");
}

export default MongoDBURl;