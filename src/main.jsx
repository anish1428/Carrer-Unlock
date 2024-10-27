import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Footer from './components/Footer/Footer.jsx'
import Colleges from './components/Colleges/Colleges.jsx'
import Russia from './components/Colleges/Russia.jsx'
import Vietnam from './components/Colleges/Vietnam.jsx'
import Engineering from './components/Colleges/Engineering.jsx'
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contacts",
    element: <Contacts />
  },
  {
    path: "/colleges",
    element: <Colleges />
  },
  {
    path:"/russia",
    element:<Russia/>
  },
  {
    path:"/vietnam",
    element:<Vietnam/>
  },
  {
    path:"/engineering",
    element:<Engineering/>
  },
  {
     path:"*",
     element:<App/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
   
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
