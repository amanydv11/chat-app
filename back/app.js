import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoutes from './routes/authRoutes.js'
import messRoutes from './routes/messRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import {server,app } from './socket/socket.js'

dotenv.config();
//const app = express();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to db"); 
}).catch((err)=>{
    console.log(err);
    
})


const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth',authRoutes);
app.use('/api/message',messRoutes);
app.use('/api/users',userRoutes);



app.get('/', (req,res)=>{
    res.send("hello world")
})

server.listen(PORT,()=>{
    console.log("server is running" + PORT );
    
})



//error handel
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || "server not working"
    console.log(res);
     res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})