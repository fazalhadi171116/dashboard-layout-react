import React from "react";
import "./card.css";

const UserCard = ({ data }) => {
  return (
    <div class="card-container">
      <span class="pro">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </span>
      <img src={data.image} alt="user" />
      <h4>{data.name}</h4>
      <h6>{data.position}</h6>

      <div class="info skills">
        <ul>
          <li>
            <i class="fa-solid fa-envelope"></i> {data.email}
          </li>
          <li>
            <i class="fa-solid fa-phone"></i> {data.phone}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
