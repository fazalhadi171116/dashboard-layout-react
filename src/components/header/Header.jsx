import React from "react";
import "./header.css";


const Header = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-white navbar-section ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/images/logo.png"
              className="h-8 "
              style={{ width: "220px" }}
              alt="..."
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="search-section header-search-input">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search here "
                aria-label="Search"
              />
            </form>
          </div>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-lg-auto mr-auto  ">
              
              <a className="nav-item nav-link " href="#" >
                Product
              </a>
              <a className="nav-item nav-link" href="#">
                Features
              </a>
              <a className="nav-item nav-link" href="#">
                Pricing <i class="fa-solid fa-caret-down"></i>
              </a>
            </div>

            <div className="navbar-nav ms-lg-4 pe-2 " >
              <img
                src="/images/download.jfif"
                className="h-8 "
                style={{ width: "50px", height:"50px", borderRadius: "50%" }}
              />
            </div>

            <div className="d-flex align-items-lg-center  mt-3 mt-lg-0 pe-3">
              <a className="nav-item nav-link" href="#">
                Super Admin <i class="fa-solid fa-caret-down"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
