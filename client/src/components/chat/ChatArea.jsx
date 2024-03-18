import React from 'react'
import ChatBubble from './ChatBubble'

const ChatArea = () => {
  return (
    <div className='bg-gray-light h-full p-2 overflow-y-auto'>
      <ChatBubble />
    </div>
  )
}

export default ChatArea;