import User from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {errorHandler} from '../utils/error.js'

export const signup = async (req, res, next)=>{

const{username, email, password,confirmPassword,gender}=req.body
try {
const validUser = await User.findOne({ email });

if(validUser){
    return res.status(400).json({message:"User already existed"})
}

if(password !== confirmPassword){
    return res.status(400).json({message:"password do not match"})
}

const hashedPassword = await bcrypt.hash(password,10)

const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
const girlProfilePic= `https://avatar.iran.liara.run/public/girl?username=${username}`

const newUser =new User({
    username,
    email,
    password: hashedPassword,
    gender,
    profilePic:gender=== "male" ? boyProfilePic :girlProfilePic,
})

    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET)

    await newUser.save()
    res.cookie("access_token",token ,{httpOnly:true}).status(201).json({
        _id:newUser._id,
        username: newUser.username,
        email:newUser.email,
        profilePic:newUser.profilePic,
        token:token,
    })
} catch (error) {
    console.log(error);
    res.status(500).json({error:"invalid password"})
    
}

}
export const login = async (req, res,next)=>{
        const{email, password} = req.body;

        try {

        const validUser = await User.findOne({email});
        if(!validUser){
           return res.status(400).json({message:"user not found"})
        }

        const validPassword =await bcrypt.compare(password,validUser.password)
        if(!validPassword){
            return res.json({message:"password is incorrect"})
        }
        
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)

        res.cookie("access_token",token,{httpOnly:true}).status(200).json({
            _id:validUser._id,
            username: validUser.username,
            email:validUser.email,
            profilePic:validUser.profilePic,
            token:token,
        })

    } catch (error) {
        next(error)
    }
}
export const logout = (req, res,next)=>{
    try {
        res.clearCookie("access_token")

        res.status(200).json({message:"user logged out"})
    } catch (error) {
        next(error)
    }
}
