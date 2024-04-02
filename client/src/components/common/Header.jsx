import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {logoutUserRoute} from '../../routes/ApiRoutes';
import toast, { Toaster } from 'react-hot-toast';

//components or pages
import SearchBar from './SearchBar';
import Button from '../common/Button';
import { FaPowerOff } from "react-icons/fa6";

const Header = () => {
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const logout = await axios.get(logoutUserRoute, {
        withCredentials: 'same-origin'
      })
      
      if(logout.data.success) {
        toast.success(logout.data.msg)
        setTimeout(() => {
          navigate('/login')
        }, 2000)
      }
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <div className='w-full flex pt-3'>
      <div className='flex w-[75%] justify-center items-center'>
        <div className='w-[60%]'>
          
        </div>
        <div className='w-[40%]'>
          <SearchBar />
        </div>
      </div>
      <div className='w-[25%] flex'>
        <div className='xl:w-[70%] 2xl:w-[70%] flex justify-end items-end'>
          <Button className='w-[80%] text-center font-bold bg-gray-light'>
            New Chats
          </Button>
        </div>
        <div className='xl:w-[30%] 2xl:w-[30%] flex justify-center items-center'>
          <span onClick={e => handleLogout(e)} className='text-red hover:cursor-pointer'><FaPowerOff /></span>
        </div>
      </div>
      <Toaster position='top-center'/>
    </div>
  )
}

export default Header;