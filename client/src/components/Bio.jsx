import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaCircleInfo } from "react-icons/fa6";

const Bio = () => {
    return (
        <div className='flex w-full'>
            <ul className='list-none text-white text-[1.1vw] w-full'>
                <li className='flex space-x-1 items-center w-full'>
                    <span className='xl:p-5 xl:text-xl 2xl:p-5 2xl:text-xl'><FaPhoneAlt /></span>
                    <div className='w-full'>
                        <p className='text-white'>+62 8227390684</p>
                        <p className='text-gray text-[0.9vw]'>Phone</p>
                    </div>
                </li>
                <li className='flex space-x-1 items-center w-full'>
                    <span className='xl:p-5 xl:text-xl 2xl:p-5 2xl:text-xl'><CiUser /></span>
                    <div className='w-full'>
                        <p className='text-white'>jennifer</p>
                        <p className='text-gray text-[0.9vw]'>Username</p>
                    </div>
                </li>
                <li className='flex space-x-1 items-center w-full'>
                    <span className='xl:p-5 xl:text-xl 2xl:p-5 2xl:text-xl'><FaCircleInfo /></span>
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