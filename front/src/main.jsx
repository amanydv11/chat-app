import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AppContextProvider} from './context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SocketContextProvider } from './context/SocketContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
    <SocketContextProvider>
    <App />
    </SocketContextProvider>
  </AppContextProvider>
  </BrowserRouter>
    
  
)
