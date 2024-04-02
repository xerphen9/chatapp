import React from 'react'
import NavBar from './NavBar';
import Bio from '../Bio';

const SideBar = () => {
  return (
    <>
      <div className='h-full'>
        <div className='h-[55%] border-b-gray border-b-2'>
          <div className='h-[50%]'>
            <div className="avatar w-full">
              <div className="w-24 rounded-full m-auto mt-5">
                <img alt='' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className='w-full'>
              <div className='text-center'>
                <h1 className='text-white text-xl'>Jennifer Lawrence</h1>
                <h1 className='text-gray text-md'>Product Designer</h1>
              </div>
            </div>
          </div>
          <div className='h-[50%]'>
            <Bio />
          </div>
        </div>
        <div className='h-[45%]'>
          <NavBar />
        </div>
      </div>
    </>
  )
}

export default SideBar;