import React from 'react'
import InputField from './InputField'
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <>
      <div className='w-full text-right'>
        <span className='relative'>
          <span><FaMagnifyingGlass className='absolute text-gray top-0 bottom-0 right-0 pr-3 hover:cursor-pointer'/></span>
          <InputField type='text' placeholder='Search' classname='max-w-xs'/>
        </span>
      </div>
    </>
  )
}


export default SearchBar;