export const sendMessage = async (req,res,next)=>{
    try {
        const{message}= req.body
        const {id: receiverId}= req.params
        const senderId = req.user.id
    } catch (error) {
        
    }
}