import React from "react";
import "./ProductCategoriesDetailsStyle.css";
import {useHistory } from "react-router-dom";

const ProductCategoriesDetailsSub = ({ item, index }) => {
  const history = useHistory();
  return (
    <div key={index} onClick={()=>{history.push(`/productOrderDetails/${item._id}`)}}>
      <div className="productDetails">
        <div className="image">
          <img src={item.img} alt="" />
          {/* {item.isDeleverable ? "Available" : "Not Deleverable"} */}
        </div>
        <div className="details">
          <div className="highlights">
            <div className="highlight">
              <p></p>
              <h3>{item.title.trim().length<200?item.title:`${item.title.trim().substring(0,130)} ...`}</h3>
              <div className="reviews">
                <div className="ratting">{<h6>{item.ratting} ☆</h6>}</div>
                {item.totalRating} Rattings & {item.totoalReview} Reviews
              </div>
            </div>
            {item.highlights.map((name) => (
              <li>{name}</li>
            ))}
          </div>
          <div className="price">
            <div className="priceDetails">
              <div>
                <h2>
                  ₹
                  {Math.floor(
                    item.originalPrice-item.originalPrice*(item.discountPercentage/100)
                  )}
                </h2>
              </div>
              <div className="off">
                <p>₹ {item.originalPrice}</p>
                <span>{item.discountPercentage}% off</span>
              </div>
            </div>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductCategoriesDetailsSub;
