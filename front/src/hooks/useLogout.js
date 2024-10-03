import {useState} from 'react'
import {useAppContext} from '../context/AppContext'
import {toast} from 'react-toastify'
const useLogout = ()=>{

    const [loading, setLoading]= useState(false)
    const{setAuthUser}= useAppContext()

    const logout = async()=>{
        try {
            setLoading(true)

            const res = await fetch('/api/auth/logout',{
                method:"GET",
                headers:{"Content-Type":"application/json"}
            })

            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.removeItem("user")
            setAuthUser(null)
        } catch (error) {
          toast.error(error.message)  
        }
        finally{
            setLoading(false)
        }
    }
    return{loading, logout}
}

export default useLogout