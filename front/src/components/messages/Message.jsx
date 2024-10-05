import React from 'react'
import {useAppContext} from '../../context/AppContext'
import useConversation from '../../zustand/useConversation';
import { formatTime } from '../../utils/formatTime';
const Message = ({message}) => {
//console.log(message)
const {authUser} =useAppContext()
const {selectedConversation} = useConversation();
const messageFromMe = message.senderId === authUser._id
const chatClassName = messageFromMe ? "chat-end" : "chat-start"
const profilePic = messageFromMe
	  ? authUser.profilePic
	  : selectedConversation?.profilePic
  
	const msgBgColor = messageFromMe ? "bg-green-500" : "";
  
	const formattedTime = formatTime(message.createdAt)
	const shakeClass = message.shouldShake ? "shake" : "";
  return (
  <>
    <div className={`chat ${chatClassName} `} >
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white  pb-2 ${msgBgColor} ${shakeClass}`}>{message.message}</div>

			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime} </div>
		</div>
	  </>
  )
}

export default Message
