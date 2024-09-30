import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to db"); 
}).catch((err)=>{
    console.log(err);
    
})



const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth',authRoutes);



app.get('/', (req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log("server is running" + PORT );
    
})
