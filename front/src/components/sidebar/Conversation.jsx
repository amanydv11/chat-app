import React from 'react'
import useConversation from '../../zustand/useConversation'
import {useSocketContext} from '../../context/SocketContext'

const Conversation = ({conversation,lastIndex}) => {
const {selectedConversation, setSelectedConversation} =useConversation()

const {onlineUsers} =useSocketContext()

const isOnline = onlineUsers.includes(conversation._id)
const isSelected = selectedConversation?._id === conversation._id
  return (
    <>
     <div className={`flex gap-2 items-start hover:bg-orange-700 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-orange-700" :""}`}
     onClick={()=> setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-12 rounded-full">
                <img src={conversation.profilePic} alt="" />
            </div>
        </div>
        
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className='font-bold text-white'>{conversation.username}</p>
            </div>
        </div>
        </div> 
        {!lastIndex && <div className="divider my-0 py-0 h-1 "></div>}
    </>
  )
}

export default Conversation
