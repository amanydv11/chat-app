import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    
    </div>
  )
}

export default App
