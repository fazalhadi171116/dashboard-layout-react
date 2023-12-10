
import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import {  Routes, Route } from "react-router-dom";
import UserAbout from './components/userAbout/UserAbout'
import Dashboard from './components/dashboard/Dashboard'
import Products from './components/products/Products';



function App() {
  

  return (
    <>
  
     <Header/>
    <Routes>
   
    <Route path="/" element={<Dashboard/>} />
    <Route path="/contact" element={<UserAbout />} />
    <Route path="/products" element={<Products />} />
  
    </Routes>
    </>
  )
}

export default App
