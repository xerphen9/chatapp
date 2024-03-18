import React, { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext';

const ChatBubble = () => {
    const {message} = useContext(ChatContext)

    // const chatStart = 
    //     <div className="chat chat-start">
    //         <div className="chat-image avatar">
    //             <div className="w-10 rounded-full">
    //                 <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    //             </div>
    //         </div>
    //         <div className="chat-header">
    //             Obi-Wan Kenobi
    //             <time className="text-xs opacity-50">12:45</time>
    //         </div>
    //         <div className="chat-bubble">You were the Chosen One!</div>
    //         <div className="chat-footer opacity-50">
    //             Delivered
    //         </div>
    //     </div>

    const chatEnd = 
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">{message}</div>
            <div className="chat-footer opacity-50">
                Seen at 12:46
            </div>
        </div>

    return (
        <>
            { message !== '' ? chatEnd : null }
        </>
    )
}

export default ChatBubble;