import React, { useEffect } from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
import { IoIosVideocam } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()

  useEffect(()=>{
    return () => setSelectedConversation(null)
  },[setSelectedConversation])

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
          <IoIosVideocam />
          <MdAddCall />
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
  return(
    <div className="flex items-center font-serif justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg ms:text-xl text-white font-semibold flex flex-col items-center gap-2">
        <p>Welcome</p>
        <p>Select a chat to start message</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}
export default MessageContainer
