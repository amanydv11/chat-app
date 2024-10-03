import { useState } from "react"
import {useAppContext} from '../context/AppContext'
import { toast } from "react-toastify"

const handleInputErrors =({username,
    email,
    password,
    confirmPassword,
    gender})=>{
    if(!username || !email || !password || !confirmPassword || !gender){
        toast.error("fill all the fields");
        return false
    }
    if(password !== confirmPassword){
        toast.error("Passwords do not match");
        return false
    }

    if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}
    
    return false
}
const useSignup =()=>{
    const [loading, setLoading]= useState(false)
    const{authUser, setAuthUser} = useAppContext()

    const signup= async({username, email, password, confirmPassword,gender})=>{
        const checkError =handleInputErrors({
            username,
            email,
            password,
            confirmPassword,
            gender
        })
        if(checkError){
            return
        }
        try {
            setLoading(true)
            const res = await fetch('/api/auth/signup',{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify({
                    username,
                    email,
                    password,
                    confirmPassword,
                    gender
                })
            })
            const data= await res.json()

            if(data.error){
                throw new Error(data.error)
            }
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return{loading,signup}

}
export default useSignup
   