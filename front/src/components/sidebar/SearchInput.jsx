import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import useConversation from '../../zustand/useConversation'
import { useGetConversation } from '../../hooks/useGetConversation'
import { toast } from 'react-toastify'
const SearchInput = () => {
  const [search, setSearch] = useState("")
  const{setSelectedConversation}= useConversation()
  const{conversation} =useGetConversation()
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!search) {
      return
    }
    
    const conversations = conversation.find((conversations) =>
      conversations.username.toLowerCase().includes(search.toLowerCase())
    )

    if (conversation) {
      setSelectedConversation(conversations)
      setSearch("")
    } else {
      toast.error("No user found with this username")
    }
  }


  return (
    <form className='flex items-center gap-2'onSubmit={handleSubmit}>
      <input type="text"placeholder='Search...'
       className='input input-bordered rounded-full'
       value={search}
       onChange={(e)=>setSearch(e.target.value)} />

      <button type='submit' className='btn btn-circle '>
        <BiSearch className="w-6 h-6 outline-none"/>
      </button>
    </form>
  )
}

export default SearchInput
