import React from 'react'
import { Link } from 'react-router-dom';
import { GoGear } from 'react-icons/go';
import { CiLock, CiBellOn } from "react-icons/ci";
import { IoMoonOutline, IoLanguageOutline } from "react-icons/io5";

const NavBar = () => {
    const route = [
        { path: '/settings', label: 'General Settings', icon: <GoGear className='p-5 w-[20px] xl:w-[20px] 2xl:w-[20px]'/>},
        { path: '/notifications', label: 'Notifications', icon: <CiBellOn className='p-5 w-[20px] xl:w-[20px] 2xl:w-[20px]'/>},
        { path: '/privacy', label: 'Privacy and Security', icon: <CiLock className='p-5 w-[20px] xl:w-[20px] 2xl:w-[20px]'/>},
        { path: null, label: 'Language', icon: <IoLanguageOutline className='p-5 w-[20px] xl:w-[20px] 2xl:w-[20px]'/>},
        { path: null, label: 'Dark Mode', icon: <IoMoonOutline className='p-5 w-[20px] xl:w-[20px] 2xl:w-[20px]'/>}
    ]

    return (
        <div className='flex w-full'>
            <ul className='list-none ml-2 text-[1.1vw] text-white w-full'>
                {
                    route.map((value, index) => {
                        return (
                            <li key={index}>
                                <Link to={value.path}>
                                    <div className='flex space-x-1 items-center w-full'>
                                        {
                                            value.label === 'Dark Mode' ? 
                                            <>
                                                {value.icon}
                                                <div className="form-control w-[70%]">
                                                    <label className="label cursor-pointer text-white">
                                                        <span className='leading-5'>{value.label}</span>
                                                        <input type="checkbox" className="toggle" checked={false} />
                                                    </label>
                                                </div>
                                            </> : 
                                            <>
                                                {value.icon}
                                                <label>{value.label}</label>
                                            </>
                                        }
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NavBar;