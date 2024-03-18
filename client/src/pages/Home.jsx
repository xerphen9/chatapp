import React from 'react'
import {useLocation} from 'react-router-dom'
import ChatPage from './ChatPage'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Settings from './Settings'
import Privacy from './Privacy'
import Notifications from './Notifications'

const Home = () => {
  const location = useLocation()

  return (
    <div className="container grid grid-cols-5 overflow-hidden">
      <div className='h-screen bg-dark'>
        <SideBar/>
      </div>
      <div className='col-span-4 h-full'>
        <div className='h-[10%] bg-transparent border-b-gray-light border-b-2'>
          <Header />
        </div>
        <div className='h-[90%]'>
          { 
            location.pathname === '/' ? <ChatPage /> : 
            location.pathname === '/settings' ? <Settings /> :
            location.pathname === '/privacy' ? <Privacy /> :
            <Notifications />
          }
        </div>
      </div>
    </div>
  )
}

export default Home;