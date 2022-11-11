import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductOrderDetailsPage.css";

import { notifyError } from "../context/notificationContext";
import axios from "axios";
import { serverHost } from "../environment";
import { ToastContainer } from 'react-toastify';
import ReactImageMagnify from "react-image-magnify";
import { useHistory } from "react-router-dom";


const ProductOrderDetailsPage = () => {
  const { productId } = useParams();
  const [searchData, setSearchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const history = useHistory();
  
  
  useEffect(() => {
    // 👇️ only runs once
    console.log("useEffect ran");
    console.log("---------------", productId);
    axios
      .get(`${serverHost}/api/order/details`, { params: { productId } })
      .then((res) => {
        console.log("ressssss", res.data);
        let newData = res.data.data[0];
        // console.log(newData);
        setSearchData(newData);
        setIsLoaded(true);
        setCurrentImage(res.data.data[0].productPictures[0]);
        if (res.data.statusCode !== 200) {
          notifyError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        //   props.setIsOpen(false);
        notifyError(err.message);
      });
  }, []); // 👈️ empty dependencies array

  const addCart = (productId) => {
    const token = window.localStorage.getItem("token");
    console.log("token=== ",token);

    console.log("productId=====",productId);

    axios
      .get(`${serverHost}/api/product/addToCart`, { params: { productId },headers:{ 'Authorization': token }})
      .then((res) => {
        console.log("ressssss", res);
        // if (res.data?.statusCode === 200) {
        //   notifySucess(res.data.message);
        // } else {
        //   notifyError(res.data.message || res.data.error);
        // }
      });
  };

  return isLoaded ? (
    <div>
      <div className="pd-header"></div>
      <div className="pd-all">
        <div className="pd-container">
          <div className="pd-img-list">
            {searchData.productPictures.map((item, index) => (
              <div className="img-container">
                <img
                  src={searchData.productPictures[index]}
                  alt=""
                  onMouseOver={() =>
                    setCurrentImage(searchData.productPictures[index])
                  }
                />
              </div>
            ))}
          </div>
          <div className="pd-images">
            <div className="pd-image">
              <img
                src={
                  currentImage ? currentImage : searchData.productPictures[0]
                }
                alt="image"
              />
            </div>

            {/* <div className="fluid">
              <div className="fluid__image-container">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: currentImage ? currentImage : searchData.productPictures[0],
                      // srcSet: [`${currentImage} 0.1h`],
                      sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                    },
                    largeImage: {
                      src: currentImage ? currentImage : searchData.productPictures[0],
                      width: 1200,
                      height: 1800,
                    },
                    enlargedImageContainerDimensions: {
                      width: "200%",
                      height: "100%",
                    },
                  }}
                />
              </div>
            </div> */}
            <div className="pd-btn" onClick={()=>{history.push(`/viewCart/`)}}>
              <div id="pd-btn-1" onClick={() => addCart(productId)}>
                <h2>🛒</h2>
                <h3>Add TO CART</h3>
              </div>
              <div id="pd-btn-2">
                <h2>⚡</h2>
                <h3>BUY NOW</h3>
              </div>
            </div>
          </div>
          <div className="pd-all-details">
            <div>
              <p className="pd-title">{searchData.title}</p>
            </div>
            <div className="pd-isRated">
              {/* <p>Be the first to Review this product</p> */}
              {searchData.totalReview <= 0 ? (
                <p>Be the first to Review this product</p>
              ) : (
                <div className="pd-ratting">
                  <div className="ratting">
                    {<h6>{searchData.avgRatting} ☆</h6>}
                  </div>
                  {searchData.totalRatting} Rattings & {searchData.totalReview}{" "}
                  Reviews
                </div>
              )}
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt="image"
              />
            </div>
            <div className="pd-price">
              <div>
                <h1>
                  ₹{" "}
                  {Math.floor(
                    searchData.originalPrice -
                      searchData.originalPrice *
                        (searchData.discountPercentage / 100)
                  )}
                </h1>
              </div>
              <div className="pd-rs-off">
                <h3>₹ {searchData.originalPrice}</h3>
              </div>
              <div className="pd-p-off">
                <h3>{searchData.discountPercentage}% off</h3>
              </div>
            </div>

            <div className="pd-offer-details">
              <p>Available offers</p>
              {searchData.offers.map((item) => (
                <div>
                  <img
                    src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                    alt="img"
                  />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="pd-address-details">
              <p>Delivery</p>
              <div className="pd-address">
                <div>
                  <svg
                    width="14"
                    height="19"
                    viewBox="0 0 9 12"
                    class="_1kbGNj"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#2874f0"
                      class="_6xm1dD"
                      d="M4.2 5.7c-.828 0-1.5-.672-1.5-1.5 0-.398.158-.78.44-1.06.28-.282.662-.44 1.06-.44.828 0 1.5.672 1.5 1.5 0 .398-.158.78-.44 1.06-.28.282-.662.44-1.06.44zm0-5.7C1.88 0 0 1.88 0 4.2 0 7.35 4.2 12 4.2 12s4.2-4.65 4.2-7.8C8.4 1.88 6.52 0 4.2 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <form autocomplete="off" class="N79-rD">
                    <input
                      class="_36yFo0"
                      placeholder="Enter Delivery Pincode"
                      type="text"
                      maxlength="6"
                      id="pincodeInputId"
                      value="201301"
                    />
                  </form>
                  <p style={{ color: "blue", fontWeight: "lighter" }}>Change</p>
                </div>
                <div style={{ height: "2px", backgroundColor: "blue" }}></div>
              </div>
              <div></div>
              <div></div>
            </div>
            <div className="pd-delivery">
              <p>Delivery by27 Aug, Saturday |</p>
              <p style={{ color: "green" }}> Free</p>
              <p style={{ color: "gray", "text-decoration": "line-through" }}>
                ₹ 40
              </p>
            </div>
            <div className="pd-highlight">
              <p>Highlights</p>
              <ul className="pd-ul">
                {searchData.Highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProductOrderDetailsPage;
