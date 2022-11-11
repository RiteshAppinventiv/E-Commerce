import React, { useState } from "react";
import "./HeaderStyles.css";
import Popup from "./LoginPopUp";
import Login from "./Login";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { notifySucess } from "../context/notificationContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const token = window.localStorage.getItem("token");

  const togglePopup = () => {
    if(!token)
      setIsOpen(!isOpen);
  };

  const logout = () => {
    if(!token)
      notifySucess("ALready logout")
    else{
      console.log("hello............1")
      window.localStorage.removeItem("token");

      notifySucess("Logout successfully")
    }
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
          <div className="login-divv">
            <div className="login-div-1">
              <button className="login" onClick={togglePopup}>
                {token ? "My Acount" : "Login"}
              </button>
              {token ? (
                <div className="dropdown-menu">
                  <a href="/">Home</a>
                  <a href="#">About</a>
                  <a href="#">Services</a>
                  <a href="#">Portfolio</a>
                  <a href="/" onClick={() => logout()}>
                    Logout
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          {isOpen && (
            <Popup
              content={
                <>
                  <Login setIsOpen={setIsOpen} />
                  {/* <Login/> */}
                </>
              }
              handleClose={togglePopup}
            />
          )}
          <div className="cart-div">
            <span>Become a Seller</span>
            <div
              className="cart"
              onClick={() => {
                token?history.push(`/viewCart/`):togglePopup();
              }}
            >
              🛒 Cart
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
