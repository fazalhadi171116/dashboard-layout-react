import React from 'react'

const UserCard = ({data}) => {
  return (
    <>
   
      <div className="main-card">
        <div className="card-body">
            <div className="img-section">
                <img src={data.image} alt='card-image' />
                <div className="img-sec-icon">
                  <p>HR</p>
                </div>
            </div>
            <div className="card-content">
            <h5>{data.name}</h5>
            <p>{data.position}</p>
            </div>
            <div className="card-icon">
           <p><i className="fa-solid fa-phone"></i>   {data.phone}</p>
           <p><i className="fa-solid fa-envelope"></i>  {data.email}</p>
            
            </div>
            <div className="card-profile-edit-sec">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
      </div>
  
    
    </>
  )
}

export default UserCard