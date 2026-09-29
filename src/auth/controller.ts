import user from "../model/userschema.ts";
import bcrypt from  "bcrypt";
import { request,response } from "express";
import jwt from "jsonwebtoken";



export const register = async (req: request, res: response):Promise<void> =>{

   try {
   //get user information

   const { name,email,password }= req.body;

   if (!name || !email || !password) {
    res.status(400).json({
        message: "Name, email and password are required";
    });
    return

    // check if user exist
const existinguser = await user.findOne({email});
if (existinguser){
    res.status(400).json(
        {
            message: "user already exist"
        }
    )
}
return;
// password hash .gitignore
const hashedpassword = await bcrypt.hash(password, 10);

// creating user

const user = await user.create(
    {
        name,
        email,
        password: hashedpassword 
    }
)

re.status(200).json({
    message:"user registed successfully"
    user: {
        id: user._id,
        name: user.name,
        email: user.email
    }
})


   

   } catch (error) {
    res.status(500).json({
        message: "server error"
    })
    
   }
    
};


export const login = async ( req: request, res: response):Promise<void> =>{

try {
    // now i am getting  the user credentials
    const {email,password} = req.body;

    if (!email || !password){
        res.status(400).json({
            message: "email and password are required   "
        });
        return;

   

        const  user = await user.findOne({ email })

        if(!user){
            res.status(401).json({
                message: "invalid credentials"
            });
            return
        }

        const isPasswordcorrect = await bcrypt.compare(password,user.password);

        if(!isPasswordcorrect){
            res.status(400).json({
                message:"invalid email or password"
            })
            return;
        }

    }



} catch (error) {
    res.status(500).json({
        message:"server error"
    })
}

}