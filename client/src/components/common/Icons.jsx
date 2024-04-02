import classNames from 'classnames'
import { IoIosMenu } from "react-icons/io";
import { GoGear } from 'react-icons/go';
import { CiLock, CiBellOn } from "react-icons/ci";
import { IoMoonOutline, IoLanguageOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";

export const MenuIcon = ({className, ...rest}) => {
    const clsx = classNames(`p-5 w-[20px] xl:w-[20px] 2xl:w-[20px]`, className)
    return(<IoIosMenu {...rest} className={clsx}/>)
}

export const Gear = ({className, ...rest}) => {
    const clsx = classNames(`p-5 w-[20px] xl:w-[20px] 2xl:w-[20px]`, className)
    return(<GoGear {...rest} className={clsx}/>)
}

export const Lock = ({className, ...rest}) => {
    const clsx = classNames(`p-5 w-[20px] xl:w-[20px] 2xl:w-[20px]`, className)
    return(<CiLock {...rest} className={clsx}/>)
}

export const Bell = ({className, ...rest}) => {
    const clsx = classNames(`p-5 w-[20px] xl:w-[20px] 2xl:w-[20px]`, className)
    return(<CiBellOn {...rest} className={clsx}/>)
}

export const Moon = ({className, ...rest}) => {
    const clsx = classNames(`p-5 w-[20px] xl:w-[20px] 2xl:w-[20px]`, className)
    return(<IoMoonOutline {...rest} className={clsx}/>)
}

export const Language = ({className, ...rest}) => {
    const clsx = classNames(`p-5 w-[20px] xl:w-[20px] 2xl:w-[20px]`, className)
    return (<IoLanguageOutline {...rest} className={clsx}/>)
}

export const PowerOff = ({className, ...rest}) => {
    const clsx = classNames(`p-5 w-[20px] xl:w-[20px] 2xl:w-[20px]`, className)
    return (<FaPowerOff {...rest} className={clsx}/>)
}