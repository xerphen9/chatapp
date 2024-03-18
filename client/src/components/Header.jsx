import React from 'react'
import SearchBar from './SearchBar';
import Button from './Button';

const Header = () => {
  return (
    <div className='w-full flex pt-3'>
      <div className='flex w-[75%] justify-center items-center'>
        <div className='w-[60%]'>
          
        </div>
        <div className='w-[40%]'>
          <SearchBar />
        </div>
      </div>
      <div className='w-[25%]'>
        <Button className='ml-5 w-40 text-center font-bold bg-gray-light'>
          New Chats
        </Button>
      </div>
    </div>
  )
}

export default Header;