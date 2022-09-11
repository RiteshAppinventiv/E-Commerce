import React from "react";
import "./HeaderStyles.css";
import { useHistory } from "react-router-dom";


// const loginbtn=()=>{

// }

const Header = () => {
  const history = useHistory();

  const loginbtn = () => {
		// history.push("/login")
	}
  return (
    <div>
      <header>
        <img
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""
        />
        <div className="search">
          <input type="text" placeholder="Search for products,brands and more" />
          <div className="icon">🔍</div>
        </div>
        {/* <button className="login" onClick={loginbtn}>Login</button> */}
        <button className="login" onClick={()=>{history.push('/login/Ritesh')}}>Login</button>
        <p>Become a Seller</p>
        <div className="cart">🛒 Cart</div>
      </header>
    </div>
  );
};

export default Header;
