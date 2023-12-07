import React from "react";
import Sidebar from "../sidebar/Sidebar";
import UserCard from "../userCard/UserCard";

const Dashboard = () => {
  return (
    <>
     
<div class="container-fluid">
  <div class="row">
   
    <div class="col-2">
     <Sidebar/>
   
    </div>
    
   
    <div class="col-10 pt-2">
  
      <h3>Welcome To Admin Dashboard</h3>
    </div>
  </div>
</div>
    </>
  );
};

export default Dashboard;
