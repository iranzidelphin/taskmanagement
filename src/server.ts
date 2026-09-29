import http from "node:http";
import dotenv from "dotenv";
import {connectdb} from "./dbconfig/db.ts";

dotenv.config();
const PORT = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type": "Text/plain"}
    )
        res.end("server is running ")
    
})

const startserver = async (): Promise<void> =>{

    try {
        await connectdb();
      server.listen(PORT, ()=>{
        console.log(`server is uning on the port of ${PORT}`)
      })
    } catch (error) {
        console.error("failed to connect:",error)
        
    }
}

startserver();
