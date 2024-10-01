import React from 'react'
import userAvtar from '../../assets/man.png'
const Conversation = () => {
  return (
    <>
     <div className="flex gap-2 items-start hover:bg-blue-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src={userAvtar} alt="" />
            </div>
        </div>
        
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className='font-bold text-slate-700'>pinky</p>
            </div>
        </div>
        </div> 
        <div className="divider my-0 py-0 h-1 "></div>
    </>
  )
}

export default Conversation
