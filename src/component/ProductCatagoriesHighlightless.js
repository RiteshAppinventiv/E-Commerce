import React from "react";
import { notifySucess } from "../context/notificationContext";
import { ToastContainer, toast } from 'react-toastify';
import "./ProductCatagoriesHighlightlessStyle.css";

const ProductCatagoriesHighlightless = ({ item, index }) => {
  const openInNewTab = (url) => {
    var array = JSON.parse(window.localStorage.getItem("recent")) || []; //the "|| []" replaces possible null from localStorage with empty array
    var value = item._id;
    if (array.indexOf(value) === -1) {
      array.push(value);
      window.localStorage.setItem("recent", JSON.stringify(array));
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const cartAdd = (id) => {
    notifySucess("Item added successfully "+id);
  };

  return (
    <div className="h-h" key={index}>
      <div className="h-main">
        <div className="h-box">
          <div className="h-container">
            <div className="h-image-fav">
              <div className="h-img" onClick={() => openInNewTab(`/productOrderDetails/${item._id}`)}>
                <img src={item.img} alt="img" />
              </div>
              <div className="h-ratting" onClick={() => cartAdd(item._id)}>
                ❤️
              </div>
              <ToastContainer/>
            </div>
            <div className="h-details" onClick={() => openInNewTab(`/productOrderDetails/${item._id}`)}>
              <div className="h-company">{item.companyName}</div>
              <div className="h-title">
                <a href="">
                  <span>{item.title}</span>
                </a>
                <div className="h-image">
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt=""
                    // height="8px"
                  />
                </div>
              </div>
              <div className="h-price-d" onClick={() => openInNewTab(`/productOrderDetails/${item._id}`)}>
                <div>
                  ₹
                  {Math.floor(
                    item.originalPrice -
                      item.originalPrice * (item.discountPercentage / 100)
                  )}
                </div>
                <div className="off">
                  <p>₹ {item.originalPrice}</p>
                  <span>{item.discountPercentage}% off</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatagoriesHighlightless;
