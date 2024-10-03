import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { ToastContainer, toast } from 'react-toastify';
import { useAppContext } from './context/AppContext'
const App = () => {

  const {authUser}= useAppContext()

  return (

    <div className='p-4 h-screen flex items-center justify-center'>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"}/>} />
        <Route path='/login' element={authUser ? <Navigate to={"/"}/> : <Login/> } />
        <Route path='/signup' element={authUser ? <Navigate to={"/"} /> : <SignUp/>} />
      </Routes>
    
    </div>
  )
}

export default App
