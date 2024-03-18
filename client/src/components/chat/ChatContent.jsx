import React, { useState } from 'react'
import {ChatContext} from '../../context/ChatContext'
import ChatHeader from './ChatHeader';
import ChatArea from './ChatArea';
import ChatTypeMessage from './ChatTypeMessage';

const ChatContent = () => {
    const [message, setMessage] = useState('')

    return (
        <>
            <ChatContext.Provider value={{message, setMessage}}>
                <div className='h-[10%]'>
                    <ChatHeader />
                </div>
                <div className='h-[80%]'>
                    <ChatArea />
                </div>
                <div className='h-[10%] flex'>
                    <ChatTypeMessage />
                </div>
            </ChatContext.Provider>
        </>
    )
}

export default ChatContent;