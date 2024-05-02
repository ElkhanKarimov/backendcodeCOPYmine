import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config()

const app=express()

const PORT=process.env.PORT
const MOGODB_URI=process.env.MONGODB_URI

mongoose.connect(MOGODB_URI).then(()=>{
    app.listen(4000,(request,response)=>{
    console.log(`App listen port : ${PORT}`);
    })
    console.log("Database connected succesfully");
}).catch((error)=>{
    console.log(`There are error in connection ${error}`);
})

