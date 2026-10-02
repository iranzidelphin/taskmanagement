import {Schema, model, Document} from 'mongoose';

export type Typestatus = "pending" | "in-progress" | "completed";
export type Typepriority = "low" | "medium" | "high";

export interface ITask extends Document {
    title: string;
    description: string;
    status: Typestatus;
    priority: Typepriority;
    dueDate?: Date;
    userId: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const taskSchema = new Schema<ITask>({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending"
    },
    priority:{
        type: String,
        enum: ["low", "medium", "high"],
        default: "low"
    },
    dueDate: {
        type: Date,
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
}, {
    timestamps: true
 


});

taskSchema.index({ userId: 1, dueDate: 1 });

export const Task = model<ITask>("Task", taskSchema);