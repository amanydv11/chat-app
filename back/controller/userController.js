import User from '../models/userModel.js'

export const getUserForSidebar = async(req, res, next)=>{
    try {
        
        const loggedInUserId = req.user?.id;

        if (!loggedInUserId) {
            return res.status(400).json({ message: "Logged-in user ID not found" });
        }


        const allUserExceptLoggedIn = await User.find({
       _id:{$ne: loggedInUserId},
        }).select("-password")
        res.status(200).json({
            success: true,
            users: allUserExceptLoggedIn
        });

    } catch (error) {
        next(error)
    }
}