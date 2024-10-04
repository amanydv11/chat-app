import React from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
import { IoIosVideocam } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
const MessageContainer = () => {
  return (
    <div className="md:min-w-[400px] flex flex-col border border-gray-600 rounded-r-lg border-l-0 ">
    <>
     <div className=" justify-between bg-slate-700 items-center flex px-3 py-3 mb-2">
       <div>
      <span className='font-serif text-black label-text text-[18px]'>To:</span>
       <span className='text-white'>Pinku</span>
       </div> 
        <div className="flex gap-4 cursor-pointer ">
          <IoIosVideocam />
          <MdAddCall />
        </div>
        </div> 
        
        <Messages/>
       <Messageinput/>
    </>
    </div>
  )
}

export default MessageContainer
