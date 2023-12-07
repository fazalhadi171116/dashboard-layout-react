import React, { useState } from "react";
import "./userabout.css";
import Sidebar from "../sidebar/Sidebar";
import Pagination from "../../pagination/Pagination";
import UserCard from "../userCard/UserCard";
import data from "../data/data.json";

const UserAbout = () => {
 const [allData,setAllData] =  useState(data);
 
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>

          <div className="col-10">
            <div className="container mt-3">
              <div className="carde">
                <div className="card-body d-flex align-items-center">
                  <div className="flex-grow-1">
                    <h5 className="card-text">Contact</h5>
                  </div>

                  <div className="mx-auto">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                      />
                    </div>
                  </div>

                  <div className="flex-grow-1 text-end">
                    <button
                      className="btn me-3"
                      type="button"
                      style={{ background: "#D2E9E9" }}
                    ><i class="fa-solid fa-grip"></i></button>
                    <button
                      className="btn me-3"
                      type="button"
                      style={{ background: "#D2E9E9" }}
                    >
                      <i class="fa-solid fa-bars"></i>
                    </button>
                    <button
                      className="btn "
                      style={{ background: "#396565", color: "white" }}
                      type="button"
                    >
                      <i className="fa-solid fa-user"></i> New Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-4">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-4 ">
                { allData &&
                  allData.map((val, index) => {
                    return (
                      <div className="col" key={index}>
                        <UserCard data={val}  />
                        
                      </div>
                    );
                  })}
              </div>

                <Pagination allData={allData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAbout;
