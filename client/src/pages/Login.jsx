import React, { useState } from 'react'
import axios from 'axios'
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import { SiGmail } from "react-icons/si";
import { loginUserRoute } from '../routes/ApiRoutes';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState([
    { email: '', password: ''}
  ])

  // function to handle input data
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(loginUserRoute, {
        email: input.email,
        password: input.password,
      })
      console.log(response)
      // if(response) {
      //   toast.success('Login successful')
      //   navigate('/')
      // }
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }

  // form components
  const ButtonSubmit = 
    <Button className='w-full mt-5 text-white bg-neutral-800 text-lg shadow-lg shadow-gray hover:bg-neutral-600 hover:shadow-none'
            onClick={(e) => handleSubmit(e)}>
      Sign In
    </Button>

  const Form = 
    <form className='w-full p-6 grid grid-row-3' onSubmit={(e) => handleSubmit(e)}>
      {/* Email field */}
      <div className='py-3'>
        <label htmlFor='email' 
          className="absolute block text-[1rem] duration-200 text-dark">
          Email
        </label>
        <InputField type='text' placeholder='Email' name='email' value={input.email} 
                    className='w-full border-0 border-b-2 border-gray outline-0 text-lg
                    py-2.5 mt-3 px-0 bg-transparent placeholder:text-transparent 
                    focus:border-dark'
                    onChange={(e) => setInput({...input, email: e.target.value})}/>
      </div>

      {/* Password field */}
      <div className='py-3'>
        <label htmlFor='password' 
          className="absolute block text-[1rem] duration-200 text-dark">
          Password
        </label>
        <InputField type='password' placeholder='Password' name='password' value={input.password} 
                    className='w-full border-0 border-b-2 border-gray outline-0 text-lg
                    py-2.5 mt-3 px-0 bg-transparent placeholder:text-transparent 
                    focus:border-dark'
                    onChange={(e) => setInput({...input, password: e.target.value})}/>
      </div>
      {ButtonSubmit}
    </form>

  return (
    <div className='w-full h-screen bg-gray-light overflow-hidden'>
      <div className='h-[5%]'>
        <Button className='bg-transparent shadow-none float-end'>
          <Link to='/signup'>Sign Up</Link>
        </Button>
      </div>
      <div className='h-[20%] relative'>
        <h1 className='text-dark font-bold text-3xl text-center absolute bottom-0 right-0 left-0'>Sign In</h1>
      </div>
      <div className='sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-2/6 h-[75%] m-auto'>
        {Form}
        <h1 className='text-center mt-3'>or sign in using gmail</h1>
        <div className='w-full p-5 gap-5 mt-3'>
          <Button className='bg-transparent w-full text-xl border border-[#c71610]'><span><SiGmail className='text-[#c71610]'/></span>Gmail</Button>
        </div>
      </div>
    </div>
  )
}

export default Login;