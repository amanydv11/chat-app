import React, { useCallback, useEffect, useState } from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
import VideoCall from '../call/VideoCall';
import { IoIosVideocam } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { ImCross } from "react-icons/im"
import useConversation from '../../zustand/useConversation';
import { useAppContext } from '../../context/AppContext';
import Modal from "react-modal";

Modal.setAppElement("#root");
const MessageContainer = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const {selectedConversation, setSelectedConversation} = useConversation()

  useEffect(()=>{
    return () => setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <div className="md:min-w-[400px] flex flex-col border border-gray-600 rounded-r-lg border-l-0 ">
      {!selectedConversation ? (
        <NoChatSelected/>
      ):( 
    <>
     <div className=" justify-between bg-slate-700 items-center flex px-3 py-3 mb-2">
       <div>
      <span className='font-serif text-black label-text text-[18px]'>To:</span>
       <span className='text-white'>{selectedConversation?.username}</span>
       </div> 
        <div className="flex gap-4 cursor-pointer ">
      <button onClick={openModal}><IoIosVideocam /></button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "70",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <button onClick={closeModal} style={{ float: "right" }}>
        <ImCross />
        </button>
        <VideoCall onEndCall={closeModal} />
      </Modal>


          <button>
            <MdAddCall />
            </button>
        </div>
        </div> 
        
        <Messages/>
        
       <Messageinput/>
    </>
    )}
    </div>
  )
}
const NoChatSelected =()=>{
  const { authUser } = useAppContext();
  return(
    <div className="flex items-center font-serif justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg ms:text-xl text-white font-semibold flex flex-col items-center gap-2">
        <p>Welcome!!<br/> {authUser.username} </p>
        <p>Select a chat to start message</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}
export default MessageContainer
