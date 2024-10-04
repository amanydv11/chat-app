import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useLogin} from '../hooks/useLogin'
const Login = () => {
  const [email , setEmail]= useState("")
  const [password, setPassword] = useState("")
  const{login,loading}= useLogin()

  const handleSubmit = async(e)=>{
    e.preventDefault()

    await login(email,password)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-200">
        <h1 className='text-3xl font-serif font-semibold text-center text-slate-700'>Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base  text-black label-text'>Email</span>
            </label>

            <input className='w-full input input-bordered h-10' type="email" placeholder='hello@gmail.com' value={email}
            onChange={(e)=>setEmail(e.target.value)} />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base  text-black label-text'>Password</span>
            </label>

            <input className='w-full input input-bordered h-10' type="password" placeholder='#######'  value={password} 
            onChange={(e)=>setPassword(e.target.value)}/>
          </div>

          <div className='flex mt-2 gap-[100px]'>
          <p className='mt-1  text-black'>{"Don't"} have an account ? </p>
         <p> <Link to={"/signup"} className='text-sm font-bold hover:text-blue-700 mt-1 inline-block'>
          SignUp</Link></p>
          </div>
          
          <div className='btn btn-block text-md btn-sm mt-2 bg-black text-white ' disabled ={loading}>
            {loading ? (<span className='loading loading-spinner '></span>): "Login" }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
