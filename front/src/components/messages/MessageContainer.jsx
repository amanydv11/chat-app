import React from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
const MessageContainer = () => {
  return (
    <div className="md:min-w-[400px] mt-3.5 flex flex-col">
    <>
     <div className="bg-slate-500 rounded-t-lg px-4 py-2 mb-2">
        <span className='label-text'>To:</span>
        <span className='text-gray-900'>Pinku</span>
        </div> 
        <Messages/>
       <Messageinput/>
    </>
    </div>
  )
}

export default MessageContainer
