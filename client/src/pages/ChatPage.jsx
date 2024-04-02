import React, {useEffect, useState} from 'react'
import ChatContent from '../components/chat/ChatContent';
import ChatContacts from '../components/ChatContacts';
import GroupContacts from '../components/GroupContacts';
import { socket } from '../socket';
import { ConnectionManager } from '../components/ConnectionManager';
import { ConnectionState } from '../components/ConnectionState';
import { Events } from '../components/Events';

const ChatPage = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onEvent);
    };
  }, []);

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