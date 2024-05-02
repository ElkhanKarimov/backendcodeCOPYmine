import bcrypt from 'bcryptjs'
import { request, response } from 'express'
import { generateTokenandSetCookie } from '../utils/generateTokenandSetCookie'

export const login = (request,response)=>{
    try {
        const {username,password}=request.body
        if (!username || !password) {
            return response.status(404).send({error: "Please fill all fields"})
        }
        const user=userModel.findOne({username})
        if(!user){
            return response.status(404).send({error: "Username or password is false "})
        }
        const isPasswordCorrect=bcrypt.compare(user.password,password)
        if (!isPasswordCorrect) {
            return response.status(404).send({error: "Username or password is false "})
        }
        generateTokenandSetCookie(user._id,response)
        response.status(200).send({message: "You succesfully login"})
    } catch (error) {
        
    }
}