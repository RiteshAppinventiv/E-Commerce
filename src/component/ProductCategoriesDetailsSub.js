import React, { useState } from "react";
import "./ProductCategoriesDetailsStyle.css";
// import {useHistory } from "react-router-dom";

const ProductCategoriesDetailsSub = ({ item, index }) => {
  // const history = useHistory();
  const openInNewTab = (url) => {
    var array = JSON.parse(window.localStorage.getItem("recent")) || []; //the "|| []" replaces possible null from localStorage with empty array
    var value = item._id;
    if (array.indexOf(value) === -1) {
      array.push(value);
      window.localStorage.setItem("recent", JSON.stringify(array));
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // const [data, setData] = useState([]);

  return (
    <div
      key={index}
      onClick={() => openInNewTab(`/productOrderDetails/${item._id}`)}
    >
      <div className="productDetails">
        <div className="image">
          <img src={item.img} alt="" />
          {/* {item.isDeleverable ? "Available" : "Not Deleverable"} */}
        </div>
        <div className="details">
          <div className="highlights">
            <div className="highlight">
              <h3>
                {item.title.trim().length < 200
                  ? item.title
                  : `${item.title.trim().substring(0, 130)} ...`}
              </h3>
              {item.totalRatting ? (
                <div className="reviews">
                  <div className="ratting">{<span>{item.ratting} ☆</span>}</div>
                  {item.totalRatting} Rattings & {item.totalReview} Reviews
                </div>
              ) : (
                ""
              )}
            </div>
            <ul> 
              {item.highlights.map((name) => (
                <li>{name}</li>
              ))}
            </ul>
          </div>
          <div className="price">
            <div className="priceDetails">
              <div>
                <h2>
                  ₹
                  {Math.floor(
                    item.originalPrice -
                      item.originalPrice * (item.discountPercentage / 100)
                  )}
                </h2>
              </div>
              <div className="off">
                <p>₹ {item.originalPrice}</p>
                <span>{item.discountPercentage}% off</span>
              </div>
            </div>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductCategoriesDetailsSub;
