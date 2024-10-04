import { useEffect, useState } from 'react'
import {toast} from 'react-toastify'

export const useGetConversation = ()=>{
    const[loading, setLoading]= useState(false)
    const [conversation, setConversation]= useState([])
    useEffect(()=>{
        const getConversations = async ()=>{
            try {
                setLoading(true)

                const res = await fetch("/api/users");

                    const data = await res.json()

                if(data.error){
                    throw new Error(data.error)
                }

                setConversation(data.users)
            } 
            catch (error) {
                toast.error(error.message)
            }

            finally{
                setLoading(false)
            }
        }
        getConversations();
    },[]);
    return{loading, conversation};
}