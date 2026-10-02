

import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";

dotenv.config();



const PORT = process.env.PORT ||2000;

const startServer = async () :Promise<void> => {
    try {
        await connectDB();
                
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("Error starting server:", error);
    }
}

startServer();
    