import mongoose, {Schema, Document} from "mongoose";

interface userdata extends Document {
    name:string,
    email:string,
    password:string
}

const UserSchema = new Schema<userdata> {
    {
        name: {
    type: String,
    required: true,
        },
        email:{
    type: String,
    required: true, 
    unique:true,
        },
        password:{
    type: string,
    required: true,

        },
    },
    {
        timestamps: true,
    }
}

export const user = mongoose.model<userdata>("user",UserSchema);