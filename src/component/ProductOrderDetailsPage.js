import React from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../constant";
import "./ProductOrderDetailsPage.css";
import ReactImageMagnify from 'react-image-magnify';


const ProductOrderDetailsPage = () => {
  const { name } = useParams();
  let clickListDetails = [],
    i = 0;
  for (i = 0; i < allProducts.length; i++) {
    if (allProducts[i]._id === Number(name)) {
      clickListDetails = allProducts[i];
    }
  }
//   const srcSet=()=> {
//     return [
//         `${clickListDetails.img} 355w`,
//         `${clickListDetails.img} 481w`,
//         `${clickListDetails.img} 584w`,
//         `${clickListDetails.img} 687w`,
//         `${clickListDetails.img} 770w`,
//         `${clickListDetails.img} 861w`,
//         `${clickListDetails.img} 955w`,
//         `${clickListDetails.img} 1033w`,
//         `${clickListDetails.img} 1112w`,
//         `${clickListDetails.img} 1192w`,
//         `${clickListDetails.img} 1200w`,
//     ].join(', ');
// }
  return (
    <div>
      <div className="pd-header"></div>
      <div className="pd-all">
        <div className="pd-container">
          <div className="pd-images">
            <div className="pd-image">
              <img src={clickListDetails.img} alt="image" />
              {/* <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: clickListDetails.img,
                    srcSet: srcSet,
                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                },
                largeImage: {

                    src: clickListDetails.img,
                    width: 1000,
                    height: 800
                },
                shouldUsePositiveSpaceLens: true,
                enlargedImageContainerDimensions: {
                    width: '130%',
                    height: '150%'
                }
                }}
              /> */}
            </div>
            <div className="pd-btn">
              <div id="pd-btn-1">
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
              <h2>{clickListDetails.title}</h2>
            </div>
            <div className="pd-isRated">
              {/* <p>Be the first to Review this product</p> */}
              {clickListDetails.totoalReview <= 0 ? (
                <p>Be the first to Review this product</p>
              ) : (
                <div className="pd-ratting">
                  <div className="ratting">
                    {<h6>{clickListDetails.ratting} ☆</h6>}
                  </div>
                  {clickListDetails.totalRating} Rattings &{" "}
                  {clickListDetails.totoalReview} Reviews
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
                    clickListDetails.originalPrice -
                      clickListDetails.originalPrice *
                        (clickListDetails.discountPercentage / 100)
                  )}
                </h1>
              </div>
              <div className="pd-rs-off">
                <h3>₹ {clickListDetails.originalPrice}</h3>
              </div>
              <div className="pd-p-off">
                <h3>{clickListDetails.discountPercentage}% off</h3>
              </div>
            </div>

            <div className="pd-offer-details">
              <p>Available offers</p>
              {clickListDetails.offers.map((item) => (
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
                    width="12"
                    height="12"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrderDetailsPage;
