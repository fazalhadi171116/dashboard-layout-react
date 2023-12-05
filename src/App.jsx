import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import {  Routes, Route } from "react-router-dom";
import UserAbout from './components/userAbout/UserAbout'
import Dashboard from './components/dashboard/Dashboard'


function App() {
  

  return (
    <>
     <Header/>
    <Routes>
   
    <Route path="/" element={<Dashboard/>} />
    <Route path="/contact" element={<UserAbout />} />
  
    </Routes>
    </>
  )
}

export default App
