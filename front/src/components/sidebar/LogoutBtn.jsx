import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';
const LogoutBtn = () => {
  const {loading, logout} = useLogout()


  return (
    <div className='mt-auto flex gap-1'>
      <div><TbLogout2 className='w-6 h-6 text-white cursor-pointer' onClick={logout}/></div> 
      <div className='text-white '>Logout</div>
      
      
  
    </div>
  )
}

export default LogoutBtn
