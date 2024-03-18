import React from 'react'
import ChatContent from '../components/chat/ChatContent';
import ChatContacts from '../components/ChatContacts';
import GroupContacts from '../components/GroupContacts';

const ChatPage = () => {
  return (
    <>
      <div className='flex w-full h-full'>
        <div className='w-[75%]'>
          <ChatContent />
        </div>
        <div className='w-[25%]'>
          <div className='h-1/2 flex'>
            <div className='h-[20%] w-full flex items-center'>
              <label className='w-[80%] font-bold text-left text-lg pl-5'>Chats</label>
              <label className='text-gray text-right text-sm hover:cursor-pointer'>See All</label>
            </div>
            <div className='h-[80%] overflow-y-auto'>
              
            </div>
          </div>
          <div className='h-1/2 flex'>
            <div className='h-[20%] w-full flex items-center'>
              <label className='w-[80%] font-bold text-left text-lg pl-5'>Group</label>
              <label className='text-gray text-right text-sm hover:cursor-pointer'>See All</label>
            </div>
            <div className='h-[80%] overflow-y-auto'>
                
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatPage;