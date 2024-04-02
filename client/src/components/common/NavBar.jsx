import React from 'react'
import { Link } from 'react-router-dom';
import { GoGear } from 'react-icons/go';
import { CiLock, CiBellOn } from "react-icons/ci";
import { IoMoonOutline, IoLanguageOutline } from "react-icons/io5";
import { IconContext } from 'react-icons';

const NavBar = () => {
    const route = [
        { path: '/settings', label: 'General Settings', icon: <GoGear/>},
        { path: '/notifications', label: 'Notifications', icon: <CiLock/>},
        { path: '/privacy', label: 'Privacy and Security', icon: <CiBellOn/>},
        { path: null, label: 'Language', icon: <IoMoonOutline/>},
        { path: null, label: 'Dark Mode', icon: <IoLanguageOutline/>}
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
                                                <span className='xl:p-5 xl:text-xl 2xl:p-5 2xl:text-xl'>{value.icon}</span>
                                                <div className="form-control w-[70%]">
                                                    <label className="label cursor-pointer text-white">
                                                        <span className='leading-5'>{value.label}</span>
                                                        <input type="checkbox" className="toggle" checked={false} />
                                                    </label>
                                                </div>
                                            </> : 
                                            <>
                                                <span className='xl:p-5 xl:text-xl 2xl:p-5 2xl:text-xl'>{value.icon}</span>
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