import { Request,Response } from "express";
import bcrypt from "bcrypt";

import user from "../models/user.model";

import jwt from "jsonwebtoken";




export const registeruser = async (
    req: Request,
    res: Response
) : Promise<void> => {
    
    try{
        const {name,email,password} = req.body;
         if(!name || !email || !password) {
            res.status(400).json({message: "Please provide all required fields"});
            return;
        };
        const existingUser = await user.findOne({email});
        if(existingUser){
           res.status(400).json({message: "User already exists"});
           return;
        };

        const hashedpassword = await bcrypt.hash(password, 10);

const newUser = await user.create({
    name,
    email,
    password: hashedpassword,
});

res.status(200).json({
    message:" user registered well",
    user:{
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        
    }
})



    }
    catch(error){
res.status(500).json({
    message: "internal server error"
})
    }
}



export const loginuser = async (
    req: Request,
    res: Response
): Promise<void> =>{
  try {
      const {email,password} = req.body;

      if(!email || !password){
        res.status(400).json({
            message:"all field are require"
        }); return;
      }
      const registeduser = await user.findOne({email});
       if(!registeduser){
        res.status(400).json({
            message:"user not registered"
        })
        return
       }
       const isPasswordcorrect = await bcrypt.compare(password,registeduser.password);

       if(!isPasswordcorrect){
        res.status(401).json({
            message:"Invalid email or password"
        });
        return;
    
       }
    const token = jwt.sign(
  {
    userId: registeduser._id,
    email: registeduser.email,
  },
  process.env.JWT_SECRET as string,
  {
    expiresIn: "1d",
  }
);
    res.status(200).json({
        message:"Login success",
        token,
    })

  } catch (error) {
    console.error(error);
    res.status(500).json({
        message:"internal server error",
    })
    
  }


}



