import mongoose from "mongoose";

const MONGO_URI: string | undefined = process.env.MONGO_URI;

if(!MONGO_URI) {
    console.log(MONGO_URI)
    throw new Error("⚠️ Error: MONGO_URI environment variable is missing!");
}

export const connection  = async() => {
    if(mongoose.connection.readyState >= 1) {
        return mongoose.connection;
    }
    try {
        await mongoose.connect(MONGO_URI, {
                dbName: "my-portfolio"
            }
        )   
        console.log("🚀 Successfully connected to MongoDB!");
    } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error);
        throw new Error("⚠️ Database connection attempt unsuccessful.");
    }
}