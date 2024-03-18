import React from 'react'

const Avatar = () => {
  return (
    <>
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
    </>
  )
}

export default Avatar;