import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';
const LogoutBtn = () => {
  const {loading, logout} = useLogout()


  return (
    <div className='mt-auto'>
      {!loading ?  <TbLogout2 className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
      :( <span className=''></span>

      )}
  
    </div>
  )
}

export default LogoutBtn
