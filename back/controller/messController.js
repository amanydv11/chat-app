import Conversation from "../models/converModel.js"
import Message from "../models/messageModel.js"
import { getReceiverSocketId,io} from '../socket/socket.js'

export const sendMessage = async (req,res,next)=>{
    try {
        const{message}= req.body
        const {id: receiverId}= req.params
        const senderId = req.user.id

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},

        })
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId, receiverId]
            })
        }


        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
            conversation.message.push(newMessage._id)
        }
        //to save the message
        await Promise.all([conversation.save(),newMessage.save()])

        const receiverSocketId = getReceiverSocketId(receiverId)
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }

        res.status(201).json(newMessage)
    } catch (error) {
        next(error)
    }
}

export const getMessage = async (req, res,next)=>{
    try {
        const {id:userToMessage}= req.params
        const senderId = req.user.id

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId, userToMessage]},
        }).populate("message")

        if(!conversation){
            return res.status(200).json([])
        }

        const message = conversation.message
        res.status(200).json(message)
    } catch (error) {
        next(error)
    }
}