import express from "express"

const userRouter=express.Router()

import { login, logout, signup } from '../controller/auth.Controller.js'

userRouter.use("/login",login)
userRouter.use("/logout",login)
userRouter.use("/signup",login)

export default userRouter