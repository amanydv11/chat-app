import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
const app = express()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to db"); 
}).catch((err)=>{
    console.log(err);
    
})



const PORT = process.env.PORT || 3000
app.get('/', (req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log("server is running" + PORT );
    
})
