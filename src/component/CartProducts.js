import React, { useState } from "react";
import { notifyError, notifySucess } from "../context/notificationContext";
import "./CartMainStyle.css";
import axios from "axios";
import { serverHost } from "../environment";
import { ToastContainer } from "react-toastify";

const CartProducts = ({
  item,
  index,
  setTotalOriginalPrice,
  setTotalSavedPrice,
  removeCartItem
}) => {
  // const [itemQuentity, setItemQuentity] = useState(item.quantity);
  const [searchData, setSearchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const token = window.localStorage.getItem("token");

  const quentityIncrease = () => {
    console.log(item.productId);

    axios
      .get(`${serverHost}/api/product/itemHandelar`, {
        params: { productId: item.productId, status: "inc" },
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log("ressssss", res.data);
        let newData = res.data.data;
        setSearchData(newData);
        setIsLoaded(true);

        if (res.data.statusCode === 200) {
          // console.log(`${item.title} quentity changed to ${itemQuentity + 1}`);
          // setItemQuentity((q) => q + 1);
          notifySucess(`${item.title} quentity changed to ${item.quantity + 1}`);
          item.quantity=item.quantity+1
          setTotalOriginalPrice((q) => q + item.originalPrice);
          setTotalSavedPrice((q) => q + item.savePrice);
        } else {
          notifyError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        notifyError(err.message);
      });
  };

  const quentityDecrease = () => {
    axios
      .get(`${serverHost}/api/product/itemHandelar`, {
        params: { productId: item.productId, status: "desc" },
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log("ressssss", res.data);
        let newData = res.data.data;
        setSearchData(newData);
        // setItemQuentity((q) => q - 1);
        item.quantity=item.quantity-1;
        console.log(item.originalPrice,item.savePrice)
        setTotalOriginalPrice((q) => q - item.originalPrice);
        setTotalSavedPrice((q) => q - item.savePrice);
        notifySucess(`${item.title} quentity changed to ${item.quantity - 1}`);

        if (res.data.statusCode !== 200) {
          notifyError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        notifyError(err.message);
      });
  };

  const cartRemove = () => {
    const confirm = window.confirm("Do you really want to delete item?");
    console.log("cart remove details ",index,item.quantity,item.productId);
    if (confirm) {

      axios
      .delete(`${serverHost}/api/product/removeCart/${item.productId}`, {
        params: { productId: item.productId, status: "desc" },
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log("ressssss", res.data);
        setTotalOriginalPrice((q) => q - (item.originalPrice * item.quantity));
        setTotalSavedPrice((q) => q - (item.savePrice * item.quantity));
        removeCartItem(index)
        notifySucess(`${res.data.message}`);

        if (res.data.statusCode !== 200) {
          notifyError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        notifyError(err.message);
      });

      // setTotalOriginalPrice((q) => q - (item.originalPrice * item.quantity));
      // // setTotalSavedPrice((q) => q - ((item.originalPrice - item.savePrice) * item.quantity));
      // setTotalSavedPrice((q) => q - (item.savePrice * item.quantity));
      // removeCartItem(index)
    }
  };

  return (
    <div key={index} style={{ margin: "20px 0px" }}>
      <div className="cart-div1-product">
        <div className="cart-item">
          <div className="cart-item-img">
            <img src={item.productPictures[0]} alt="pimg" />
          </div>
          <div className="cart-item-detail">
            <h6>{item.title}</h6>
            {/* <p>Response Time: 5 ms, 75 Hz Refresh Rate</p> */}
            <p>{item?.Highlights[0]}</p>
            <p>Company: {item.companyName}</p>
            <div className="cart-p-details">
              <span className="cart-off">
                ₹ {item.originalPrice * item.quantity}
              </span>
              <span className="final-price">
                ₹ {(item.originalPrice - item.savePrice) * item.quantity}
              </span>
              <span className="off-p">{item.discountPercentage} off</span>
            </div>
            {item.offers.length ? (
              <div className="cart-item-offer">
                {item.offers.length} offers applied <span>i</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="item-delivery">Delivery by Sun Nov 13</div>
        </div>
        <div className="cart-qty">
          <div className="cart-qty-h">
            <button
              onClick={() => {
                quentityDecrease();
              }}
              disabled={item.quantity < 2}
            >
              -
            </button>
            <div>{item.quantity}</div>
            <button
              onClick={() => {
                quentityIncrease();
              }}
            >
              +
            </button>
          </div>
          <div className="cart-remove">
            <span onClick={() => cartRemove()}>REMOVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
