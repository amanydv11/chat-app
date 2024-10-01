import User from '../models/userModel.js'

export const getUserForSidebar = async(req, res, next)=>{
    try {
        
        const loggedInUserId = req.user.id

        const allUserExceptLoggedIn = await User.find({
_id:{$ne: loggedInUserId},
        }).select("-password")
    } catch (error) {
        next(error)
    }
}