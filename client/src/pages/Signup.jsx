import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import { userVerificationRoute } from '../routes/ApiRoutes';
import { FcGoogle } from "react-icons/fc";
import { registerUserRoute } from '../routes/ApiRoutes';
import InputField from '../components/common/InputField';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState([
    { email: '', password: '', confirmpassword: ''}
  ])
  
  const verification = async () => {
    try {
      const response = await axios.get(userVerificationRoute, {
        withCredentials: true
      })
      
      if(response.data.status) {
        navigate('/')
      } else {
        return;
      }
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  useEffect(() => {
    verification()
  }, [])

  // function to handle input data
  const handleSignUp = async (e) => {
    e.preventDefault()
    if(input.password === input.confirmpassword) {
      try {
          const response = await axios.post(registerUserRoute, {
            email: input.email,
            password: input.password,
          })
          if(response) {
            navigate('/')
          }
      } catch (error) {
        toast.error(error.response.data.msg)
      }
    } else{
      toast.error('Please make sure your confirm password')
    }
  }

  // form components
  const ButtonSubmit = 
    <Button className='w-full mt-5 text-white bg-neutral-800 text-lg shadow-lg shadow-gray hover:bg-neutral-600 hover:shadow-none'
            onClick={(e) => handleSignUp(e)}>
      Sign Up
    </Button>

  const Form = 
    <form className='w-full p-6 grid grid-row-4' onSubmit={(e) => handleSignUp(e)}>
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

      {/* Confirm Password field */}
      <div className='py-3'>
        <label htmlFor='confirmpassword' 
          className="absolute block text-[1rem] duration-200 text-dark">
          Confirm Password
        </label>
        <InputField type='password' placeholder='Confirm Password' name='confirmpassword' value={input.confirmpassword} 
                    className='w-full border-0 border-b-2 border-gray outline-0 text-lg
                    py-2.5 mt-3 px-0 bg-transparent placeholder:text-transparent 
                    focus:border-dark'
                    onChange={(e) => setInput({...input, confirmpassword: e.target.value})}/>
      </div>
      {ButtonSubmit}
    </form>

  return (
    <div className='w-full h-screen bg-gray-light overflow-hidden'>
      <div className='h-[5%]'>
        <Button className='bg-transparent shadow-none float-end'>
          <Link to='/'>Sign In</Link>
        </Button>
      </div>
      <div className='h-[20%] relative'>
        <h1 className='text-dark font-bold text-3xl text-center absolute bottom-0 right-0 left-0'>Sign Up</h1>
      </div>
      <div className='sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-2/6 h-[75%] m-auto'>
        { Form }
        <h1 className='text-center mt-3'>or sign up using gmail</h1>
        <div className='w-full relative p-5 mt-3'>
          <Button className='w-full text-xl 
            hover:bg-neutral-600 hover:text-white  shadow-gray'>
            <span>
              <FcGoogle />
            </span>
            Google
          </Button>
        </div>
      </div>
      <Toaster position='top-center'/>
    </div>
  )
}

export default Signup;