import React, { useState, useEffect } from "react";
import "./CartMainStyle.css";
import CartProducts from "./CartProducts";
import axios from "axios";
import { serverHost } from "../environment";
import useForceUpdate from "use-force-update";
import { notifyError } from "../context/notificationContext";

const CartMain = () => {
  const [searchData, setSearchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalItems, setTotalItems] = useState();
  const [totalOriginalPrice, setTotalOriginalPrice] = useState();
  const [totalSavedPrice, setTotalSavedPrice] = useState();

  const forceUpdate = useForceUpdate();

  const getCartData = () => {
    const token = window.localStorage.getItem("token");
    console.log("token=== ", token);

    axios
      .get(`${serverHost}/api/product/cart`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res.statusCode);
        console.log("cart ressssss", res.data);
        if (res.data.statusCode !== 200) notifyError(res.data.message);
        let newData = res.data.data[0];
        setSearchData(newData);
        setTotalItems(newData.totalItems);
        setTotalOriginalPrice(newData.totalOriginalPrice);
        setTotalSavedPrice(newData.totalSavedPrice);
        setIsLoaded(true);
        console.log(newData);
      })
      .catch((err) => {
        notifyError(err?.data.message || err?.message);
      });
  };

  const orderPlaced = () => {
    alert("Order Placed Sucessfully");
  };

  useEffect(() => {
    getCartData();
  }, []);

  const removeCartItem = (index) => {
    console.log("remocex index", index);
    console.log("before ", searchData);
    searchData.cartProducts.splice(index, 1);
    console.log("new searchData== ", searchData);
    setSearchData(searchData);
    forceUpdate();
  };

  return isLoaded ? (
    <div className="cart-container">
      <div className="cart-main">
        <div className="cart-div1">
          <div className="cart-div1-address">
            <div>Deliver to:Noida UP INDIA </div>
            <div className="div1-address-change">CHANGE</div>
          </div>
          <div className="cart-items">
            {searchData.cartProducts.map((item, index) => (
              <CartProducts
                item={item}
                index={index}
                setTotalOriginalPrice={setTotalOriginalPrice}
                setTotalSavedPrice={setTotalSavedPrice}
                removeCartItem={removeCartItem}
              />
            ))}
          </div>
          <div className="cart-order" onClick={() => orderPlaced()}>
            <div>PLACE ORDER</div>
          </div>
        </div>
        <div className="cart-div2">
          <div>
            <div className="div2-priceDetails">
              <div className="div2-priceDetails-h">PRICE DETAILS</div>
              <div className="item-details">
                <div>
                  <h6 id="price-totle">Price ({totalItems} items)</h6>
                  <h6> ₹{totalOriginalPrice}</h6>
                </div>
                <div>
                  <h6 id="price-totle">Discount</h6>
                  <h6>− ₹{totalSavedPrice}</h6>
                </div>
                <div>
                  <h6 id="price-totle">Delivery Charges</h6>
                  <h6>FREE</h6>
                </div>
              </div>
              <div className="cart-final-price">
                <h6>Total Amount</h6>
                <h6>₹ {totalOriginalPrice - totalSavedPrice}</h6>
              </div>
            </div>
            <div className="div2-save">
              You will save ₹ {totalSavedPrice} on this order
            </div>
          </div>
        </div>
      </div>
      <footer className="cart-footer">
        <div className="footer-div">
          <div className="footer-div1">
            <span>
              Policies:
              <a href="https://www.flipkart.com/pages/returnpolicy" target="_blank" rel="noreferrer">
                Returns Policy
              </a>{" "}
              |<a href="https://www.flipkart.com/pages/terms" target="_blank" rel="noreferrer">Terms of use</a> |
              <a href="https://www.flipkart.com/pages/paymentsecurity" target="_blank" rel="noreferrer">Security</a> |
              <a href="https://www.flipkart.com/pages/privacypolicy" target="_blank" rel="noreferrer">Privacy</a> |
              <a href="https://seller.flipkart.com/sell-online/?referral_url=%2Ffiv" target="_blank" rel="noreferrer">Infringement</a>
            </span>
            <span>© 2007-Flipkart.com</span>
          </div>ritesh.sahoo@appinventiv.com
          <div>
            <span>Need help? </span>
            <span>
              Visit the
              <a
                id="blue"
                href="https://www.flipkart.com/s/help?otracker=undefined_footer_navlinks"
                target="_blank"
                rel="noreferrer"
              >
                Help Center
              </a>
              or
              <a
                id="blue"
                href="https://www.flipkart.com/helpcentre?otracker=undefined_footer_navlinks"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  ) : (
    "Loading..."
  );
};

export default CartMain;
