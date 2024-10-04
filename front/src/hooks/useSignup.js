import { useState } from "react"
import {useAppContext} from '../context/AppContext'
import { toast } from "react-toastify"

const handleInputErrors =({username,
    email,
    password,
    confirmPassword,
    gender})=>{
    if(!username || !email || !password || !confirmPassword || !gender){
    return true
    }
    if(password !== confirmPassword){
        toast.error("Passwords do not match");
        return true
    }

    if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return true
	}
    
    return false
}
const useSignup =()=>{
    const [loading, setLoading]= useState(false)
    const{setAuthUser} = useAppContext()

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

localStorage.setItem("user",JSON.stringify(data))
setAuthUser(data)


        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return{loading,signup}

}
export default useSignup
   