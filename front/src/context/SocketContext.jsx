import React, { children, createContext, useContext, useEffect, useState } from 'react'
import {useAppContext} from './AppContext'
import {io} from 'socket.io-client'
const SocketContext =createContext()

export const useSocketContext = ()=>{
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children})=>{
    const[socket,setSocket]= useState(null)
    const[onlineUsers,setOnlineUsers]= useState([])
    const {authUser}= useAppContext()

    useEffect(()=>{
if(authUser){
    const socket = io("http://localhost:3000",{
      query:{
        userId:authUser._id,
      },  
    })
    setSocket(socket)
socket.on("getOnlineUsers",(users)=>{
    setOnlineUsers(users)
});
socket.on("newMessage", (message) => {
    console.log("New message received:", message); // Handle incoming message
    // Add logic to update your UI with the new message
});

    return()=> socket.close()
}else{
    if(socket){
        socket.close()
        setSocket(null)
    }
}
    },[authUser])
    return(
        <SocketContext.Provider value={{socket,onlineUsers}}>
{children}
        </SocketContext.Provider>
    )
}

export default SocketContext
