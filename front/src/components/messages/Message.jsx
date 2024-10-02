import React from 'react'
import Avtarimg from '../../assets/man.png'
const Message = () => {
  return (<>
    <div className="chat chat-start" >
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={Avtarimg} />
				</div>
			</div>
			<div className={`chat-bubble text-white  pb-2`}>Hello</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>Send 10:40</div>
		</div>
		<div className="chat chat-end">
		<div className="chat-image avatar">
		  <div className="w-10 rounded-full">
			<img
			  alt="Tailwind CSS chat bubble component"
			  src={Avtarimg} />
		  </div>
		</div>
		
		<div className="chat-bubble text-white  pb-2">I hate you!</div>
		<div className="chat-footer opacity-50">Seen 12:46</div>
	  </div>
	  </>
  )
}

export default Message
