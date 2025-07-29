import mongoose from "mongoose";

const MONGO_URI: string | undefined = process.env.MONGO_URI;

if(!MONGO_URI) {
    throw new Error("⚠️ Error: Failed To connect to DB!");
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
    } catch (error) {
        console.error("❌ Failed to connect DB:", error);
        throw new Error("⚠️ Database connection attempt unsuccessful.");
    }
}