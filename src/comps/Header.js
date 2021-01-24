import React from "react";
import Navbar from "./Navbar";
function Header(){
  return (
    
    <div className="banner">
    <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Order For Delight</h3>
            <h1>React JS Burger </h1>
        
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DILEVRY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
