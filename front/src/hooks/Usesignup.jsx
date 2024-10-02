import { useState } from "react"
import {useAppContext} from '../context/AppContext'
const usesignup=()=>{
const handleInputErrors =({username,email,password,confirmPassword,gender})=>{
    if(!username || !email || !password || !confirmPassword || !gender){
        return true
    }
    if(password !== confirmPassword){
        return true
    }
    return false
}

    const [loading, setLoading]= useState(false)
    const{setAuth} = useAppContext()

    const signup= async({username, email, password, confirmPassword,gender})=>{
        const checkError =handleInputErrors({
            username,
            email,
            password,
            confirmPassword,
            gender
        })
    }
}