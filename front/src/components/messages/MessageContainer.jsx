import React, { useCallback, useEffect, useState } from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
import { IoIosVideocam } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAppContext } from '../../context/AppContext';
import ReactPlayer from 'react-player'
const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()

const[myStream, setMyStream] =useState()
  useEffect(()=>{
    return () => setSelectedConversation(null)
  },[setSelectedConversation])

const handleCall = useCallback(async ()=>{
const stream = await navigator.mediaDevices.getUserMedia({
  audio:true,
   video:true
  })
setMyStream(stream)
},[])

  return (
    <div className="md:min-w-[400px] flex flex-col border border-gray-600 rounded-r-lg border-l-0 ">
      {!selectedConversation ? (
        <NoChatSelected/>
      ):( 
    <>
     <div className=" justify-between bg-slate-700 items-center flex px-3 py-3 mb-2">
       <div>
      <span className='font-serif text-black label-text text-[18px]'>To:</span>
       <span className='text-white'>{selectedConversation?.username}</span>
       </div> 
        <div className="flex gap-4 cursor-pointer ">
        <button onClick={handleCall} >
                <IoIosVideocam />
              </button>
              {
                myStream && <ReactPlayer playing muted 
                height='300px'
                 width='400px'
                 url={myStream}/>
              }
          <button><MdAddCall /></button>
        </div>
        </div> 
        
        <Messages/>
        
       <Messageinput/>
    </>
    )}
    </div>
  )
}
const NoChatSelected =()=>{
  const { authUser } = useAppContext();
  return(
    <div className="flex items-center font-serif justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg ms:text-xl text-white font-semibold flex flex-col items-center gap-2">
        <p>Welcome!!<br/> {authUser.username} </p>
        <p>Select a chat to start message</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}
export default MessageContainer
