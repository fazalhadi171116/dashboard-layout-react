import React from 'react'
import "./sidebar.css"
import UserAbout from '../userAbout/UserAbout'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
       <>
       
    
   <div id="wrapper" className="sidebar-section">
      <div id="sidebar-wrapper">
         <h6 className="ps-5 mb-y-2">MAIN MENU</h6>
         <ul class="sidebar-nav nav-pills nav-stacked pt-3 mt-3" id="menu">
            <li class="active">
               <Link to="/"><span class="fa-stack fa-lg pull-left"><i class="fa fa-dashboard fa-stack-1x "></i></span> Dashboard</Link>
              
            </li>
            <li>
               <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span>Email</a>
               {/* <ul class="nav-pills nav-stacked" style={{listStyleType:"none"}}>
                  <li><a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span>link1</a></li>
                  <li><a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span>link2</a></li>
               </ul> */}
            </li>
            <li>
               <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-cloud-download fa-stack-1x "></i></span>Overview</a>
            </li>
            <li>
               <a href="#"> <span class="fa-stack fa-lg pull-left"><i class="fa fa-cart-plus fa-stack-1x "></i></span>Products</a>
            </li>
           
            <li>
               <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-wrench fa-stack-1x "></i></span>Services</a>
            </li>
            <li>
               <Link to="/contact"><span class="fa-stack fa-lg pull-left"><i class="fa fa-server fa-stack-1x "></i></span>Contact</Link>
            </li>
            <li>
               <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa-solid fa-gear fa-stack-1x"></i></span>Settings</a>
            </li>
         </ul>
      </div>

       <div id="page-content-wrapper">
         <div class="container-fluid xyz">
            <div class="row">
               <div class="col-lg-12">
                 {/* <UserAbout/> */}
               </div>
            </div>
         </div>
      </div> 
     
   </div>
       
       </>
  )
}

export default Sidebar