import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

export const connectdb = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log("mongo db connected successfully");
    } catch (error) {
        console.error("connection failed:", error);
        process.exit(1);
        
    }
    
}