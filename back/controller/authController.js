import User from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const signup = async (req, res)=>{

const{username, email, password,confirmPassword,gender}=req.body
let validUser = await User.findOne({ email });
if(validUser){
    return res.status(400).json({success:false, message:"user already exist"})
}

if(password !== confirmPassword){
    return res.status(400).json({
       error:"password don't match"
       
        
    })
}

const hashedPassword = bcrypt.hashSync(password,10)
const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
const girlProfilePic= `https://avatar.iran.liara.run/public/girl?username=${username}`

const newUser =new User({
    username,
    email,
    password: hashedPassword,
    gender,
    profilePic:gender=== "male" ? boyProfilePic :girlProfilePic,
})
try {
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
export const login = (req, res)=>{
    
}
export const logout = (req, res)=>{
    
}
