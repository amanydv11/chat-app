import React, { useState } from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import useSendMessage from '../../hooks/useSendMessage';
const Messageinput = () => {
const [message, setMessage] = useState("")
const {loading,sendMessage}= useSendMessage();


const handleSubmit =async (e)=>{
  e.preventDefault()
  if(!message){
    return
  }
  await sendMessage(message)
  setMessage("")
}


  return (
    <form onSubmit={handleSubmit}>
    <div className='w-full relative'>
      <input
        type='text'
        className='border text-sm rounded-b block w-full p-2.5  bg-gray-700 border-gray-700 text-white'
        placeholder='Send a message' 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />
      <button type='submit'
       className=' absolute inset-y-0 end-0 flex items-center pe-4'>
      
      {loading ? (
        <div className='loading loading-spinner'></div>
      ):(
<RiSendPlaneFill />
      )}
      </button>
    </div>
  </form>
  )
}

export default Messageinput
