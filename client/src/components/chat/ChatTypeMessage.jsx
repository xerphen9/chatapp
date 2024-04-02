import React, {useContext, useState} from 'react'
import { ChatContext } from '../../context/ChatContext';
import {io} from 'socket.io-client'
import { BASE_URL } from '../../routes/ApiRoutes';
import InputField from '../common/InputField';
import Button from '../common/Button';
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
            <span className='absolute text-gray right-0 pr-3 hover:cursor-pointer top-0 bottom-0
                text-xl
                sm:text-xl
                md:text-xl 
                xl:text-xl
                2xl:text-xl' onClick={e => handleClick(e)}>
              <IoPaperPlaneOutline />
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