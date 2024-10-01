import Conversation from "../models/converModel.js"
import Message from "../models/messageModel.js"

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


        res.status(201).json(newMessage)
    } catch (error) {
        next(error)
    }
}