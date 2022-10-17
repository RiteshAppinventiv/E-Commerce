import React, { useState } from "react";
import "./HeaderStyles.css";
import { useHistory } from "react-router-dom";
import Popup from "./LoginPopUp";
import Login from "./Login";

// const loginbtn=()=>{

// }

const Header = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-div">
      <header>
        <div className="fl-logo-div">
          <img
            id="fl-logo"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt=""
          />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for products,brands and more"
          />
          <div className="icon">🔍</div>
        </div>
        {/* <button className="login" onClick={loginbtn}>Login</button> */}
        <div className="login-button-div">
          <button className="login" onClick={togglePopup}>
            Login
          </button>
          {isOpen && (
            <Popup
              content={
                <>
                  <Login />
                  {/* <Login/> */}
                </>
              }
              handleClose={togglePopup}
            />
          )}
          <div className="cart-div">
            <span>Become a Seller</span>
            <div className="cart">🛒 Cart</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
