import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faUser, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FaPhone, FaUser, FaInfoCircle } from 'react-icons/fa';

const Bio = () => {
    return (
        <div className='flex w-full'>
            <ul className='list-none text-white text-[1.1vw] w-full'>
                <li className='flex space-x-1 items-center w-full'>
                    <FaPhone className='p-6 w-[20px] xl:w-[20px] 2xl:w-[20px]'/>
                    <div className='w-full'>
                        <p className='text-white'>+62 8227390684</p>
                        <p className='text-gray text-[0.9vw]'>Phone</p>
                    </div>
                </li>
                <li className='flex space-x-1 items-center w-full'>
                    <FaUser className='p-6 w-[20px] xl:w-[20px] 2xl:w-[20px]'/>
                    <div className='w-full'>
                        <p className='text-white'>jennifer</p>
                        <p className='text-gray text-[0.9vw]'>Username</p>
                    </div>
                </li>
                <li className='flex space-x-1 items-center w-full'>
                    <FaInfoCircle className='p-6 w-[20px] xl:w-[20px] 2xl:w-[20px]'/>
                    <div className='w-full'>
                        <p className='text-white'>Product Designer</p>
                        <p className='text-gray text-[0.9vw]'>Status</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Bio;