import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  const [btnName,setBtnName] = useState("Login");

  // let btnName = "Login";

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL }
          alt="app logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
          <button className="login"
          onClick={()=>{
            setBtnName(prev=> prev==="Login" ? "Logout" : "Login")
          }}>{btnName}</button>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;