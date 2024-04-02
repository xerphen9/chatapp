//configuration and library dependencies
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useLocation} from 'react-router-dom'
import { userVerificationRoute } from '../routes/ApiRoutes'

//components
import ChatPage from './ChatPage'
import SideBar from '../components/common/SideBar'
import Header from '../components/common/Header'
import Settings from './Settings'
import Privacy from './Privacy'
import Notifications from './Notifications'

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const verification = async () => {
    try {
      const response = await axios.get(userVerificationRoute, {
        withCredentials: true
      })
      
      if(response.data.status) {
        return;
      } else {
        navigate('/login')
      }
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  useEffect(() => {
    verification()
  }, [])

  return (
    <div className='container'>
      <div className="w-full grid grid-cols-5 overflow-hidden">
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
    </div>
  )
}

export default Home;