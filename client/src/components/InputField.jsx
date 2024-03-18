import React from 'react'
import classNames from 'classnames';

const InputField = ({type, placeholder, classname, value, ...rest}) => {
    const clsx = classNames('input w-full rounded-full bg-gray-light', classname)

    return (
        <input type={type} placeholder={placeholder} className={clsx} value={value} {...rest}/>
    )
}

export default InputField;