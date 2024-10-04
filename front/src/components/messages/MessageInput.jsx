import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
const Messageinput = () => {
  return (
    <form>
    <div className='w-full relative'>
      <input
        type='text'
        className='border text-sm rounded- block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
        placeholder='Send a message' 
      />
      <button type='submit' className=' absolute inset-y-0 end-0 flex items-center pe-4'>
      <RiSendPlaneFill />
      </button>
    </div>
  </form>
  )
}

export default Messageinput
