import React from 'react'
import SearchInput from './SearchInput'
import LogoutBtn from './LogoutBtn'
import Coversations from './Coversations'
const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput/>
        <div className="divider px-3"></div>
        <Coversations/>
        <LogoutBtn/>
    
    </div>
  )
}

export default Sidebar
