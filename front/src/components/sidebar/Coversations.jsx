import React from 'react'
import Conversation from './Conversation'
import { useGetConversation } from '../../hooks/useGetConversation'
const Conversations = () => {

  const {loading, conversation} =  useGetConversation()
  const conversationsArray = Array.isArray(conversation) ? conversation : []
  return (
    <div className='py-2 flex flex-col overflow-auto'>
     {conversationsArray.map((conversation,index) =>(
 <Conversation 
 key={conversation._id} 
 conversation={conversation} 
 lastIndex ={index === conversation.length - 1}  />
     ))}
     
      {loading ? <span className='loading loading-spinner'></span>:null}
      
    </div>
  )
}

export default Conversations
