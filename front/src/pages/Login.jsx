import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-200">
        <h1 className='text-3xl font-serif font-semibold text-center text-slate-700'>Login</h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Email</span>
            </label>
            <input className='w-full input input-bordered h-10' type="email" placeholder='user@gmail.com' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input className='w-full input input-bordered h-10' type="password" placeholder='#######' />
          </div>
          <div className='flex mt-2 gap-[100px]'>
          <p className='mt-1'>{"Don't"} have an account ? </p>
         <p> <Link to={"/signup"} className='text-sm font-bold hover:text-blue-700 mt-1 inline-block'>
          SignUp</Link></p>
          </div>
          
          <div className='btn btn-block text-md btn-sm mt-2 bg-black font-bold text-white '>Login</div>
        </form>
      </div>
    </div>
  )
}

export default Login
