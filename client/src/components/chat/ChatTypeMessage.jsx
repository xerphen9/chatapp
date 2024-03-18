import React, {useContext, useState} from 'react'
import { ChatContext } from '../../context/ChatContext';
import {io} from 'socket.io-client'
import { BASE_URL } from '../../routes/ApiRoutes';
import InputField from '../InputField';
import Button from '../Button';
import { GoPaperclip } from "react-icons/go";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperclip, faPaperPlane, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const ChatTypeMessage = () => {
  const { setMessage } = useContext(ChatContext)
  const [input, setInput] = useState('')
  const socket = io.connect(BASE_URL)

  const handleClick = (e) => {
    e.preventDefault()
    
    if(input === '') {
      return
    } else {
      setMessage(input)
      socket.emit('send-msg', input)
      setInput('')
    }
  }

  return (
    <div className='w-full flex'>
      <div className='w-[5%] flex m-auto'>
        <GoPaperclip className='text-xl text-black m-auto hover:cursor-pointer'/>
      </div>
      <div className='w-[85%] m-auto text-left'>
        <form>
          <span className='relative'>
            <span>
              <IoPaperPlaneOutline className='absolute text-gray right-0 pr-3 hover:cursor-pointer
                h-12 text-2xl
                sm:h-12 sm:text-3xl
                md:h-12 md:text-3xl 
                xl:h-12 xl:text-3xl
                2xl:h-1 2xl:text-4xl'
                onClick={e => handleClick(e)}/>
            </span>
            <InputField type='text' 
                        placeholder='Type a message' 
                        classname='max-w-full'
                        onChange={(e) => setInput(e.target.value)}
                        name='message'
                        value={input}/>
          </span>
        </form>
      </div>
      <div className='w-[10%] flex m-auto'>
        <Button className='m-auto btn-info'>
          <FaMicrophone className='text-xl text-black'/>
        </Button>
      </div>
    </div>
  )
}

export default ChatTypeMessage;