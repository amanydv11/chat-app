import { useState } from "react"
import {toast} from "react-toastify"
import { useAppContext } from "../context/AppContext"

const handleInputErrors = (email,password)=>{
    if(!email || !password){
        toast.error("fill all the fields");
        return true
    }
    return false
}
export const useLogin =()=>{
    const[loading, setLoading]= useState(false)

    const {setAuthUser}= useAppContext()

    const login = async (email, password)=>{
       const checkError = handleInputErrors(
        email,
        password,
       )
       if(checkError){
        return false
    }
    try {
        setLoading(true)
        
        const res = await fetch('/api/auth/login',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                email,
                password
            })
        })
        const data= await res.json()

        if(!res.ok){
            throw new Error(data.message || "login failed. Please try again")
        }
        localStorage.setItem("user",JSON.stringify(data))
setAuthUser(data)
return true
    } catch (error) {
        toast.error(error.message)
        return false
    }
    finally{
        setLoading(false)
    }
    }
return {loading,login};
}
