import mongoose from "mongoose";

const todoSchema=mongoose.Schema(
    {
        username: {
            type: String,
            required:true,
            unique:true
        },
        fullname: {
            type: String,
            required:true
        },
        password: {
            type: String,
            required:true
        },
        configPassword: {
            type: String,
            required:true
        },
    },
    {timestamps:true}
)

const todoModel=mongoose.model("user", todoSchema)

export default todoModel
