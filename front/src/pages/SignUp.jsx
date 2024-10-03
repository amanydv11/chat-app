import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GenderCheckBox from '../components/GenderCheckBox'
import useSignup from '../hooks/Usesignup'
const Signup = () => {

  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    gender:"",
  })
const {loading,signup} = useSignup()
  const handleCheckboxChange = (gender)=>{
setFormData({...formData, gender})
  }
const handleSubmit = async(e) =>{
  e.preventDefault()

  await signup(formData)
}
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-200">
        <h1 className='text-3xl font-serif font-semibold text-center text-slate-700'>Create Account</h1>
        <form onSubmit={handleSubmit}>

        <div>
            <label className='label p-2'>
              <span className='text-base  text-black label-text'>Username</span>
            </label>
            <input className='w-full input input-bordered h-10'
            value={formData.username}
            onChange={(e)=>setFormData({...formData,username:e.target.value})}
             type="text" placeholder='mighty@123' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base  text-black label-text'>Email</span>
            </label>
            <input className='w-full input input-bordered h-10'
            value={formData.email}
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
             type="email" placeholder='hello@gmail.com' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base  text-black label-text'>Password</span>
            </label>
            <input className='w-full input input-bordered h-10'
            value={formData.password}
            onChange={(e)=>setFormData({...formData,password:e.target.value})}
             type="password" placeholder='#######' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base  text-black label-text'>Confirm Password</span>
            </label>
            <input className='w-full input input-bordered h-10'
            value={formData.confirmPassword}
            onChange={(e)=>setFormData({...formData,confirmPassword:e.target.value})}
             type="password" placeholder='#######' />
          </div>

          <GenderCheckBox
           onCheckboxChange={handleCheckboxChange}
          selectedGender={formData.gender} />

          <div className='flex  gap-[100px]'>
          <p className='mt-1 ml-3 text-black'> Already have an account ? </p>
         <p> <Link to={"/login"} className='text-sm font-bold hover:text-blue-700 mt-1 inline-block'>
          Login</Link></p>
          </div>
          
          <div className='btn btn-block text-md btn-sm mt-2 bg-black  text-white '>Sign Up</div>
          
        </form>
      </div>
    </div>
  )
}

export default Signup
