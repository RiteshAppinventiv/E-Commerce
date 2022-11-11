import React from "react";
import "./RecentlyViewedStyles.css";

const RecentlyViewedComponent = ({ item, index }) => {

  console.log("item id",item._id);

  const openInNewTab = (url) => {
    var array = JSON.parse(window.localStorage.getItem("recent")) || []; //the "|| []" replaces possible null from localStorage with empty array
    var value = item._id;
    if (array.indexOf(value) === -1) {
      array.push(value);
      window.localStorage.setItem("recent", JSON.stringify(array));
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="containers"
      key={index}
      onClick={() => openInNewTab(`/productOrderDetails/${item._id}`)}
    >
      <div className="p-images">
        <img src={item.img} alt="mobile" />
        <p>🤍</p>
      </div>

      <div className="products">
        <h6 className="p-details">{item.details}</h6>
        {item.rating ? (
          <div className="p-ratting">
            <div className="rating">
              {item.rating.toFixed(1)}
              <img className="r-img"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                alt=""
              />
            </div>
            <div className="total-r">({item.ratingUser})</div>
            <img className="fl-image"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
              alt=""
            />
          </div>
        ) : (
          <div className="p-ratting">
            <img className="fl-image"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
              alt=""
            />
          </div>
        )}

        {/* <p className="r-price">{item.price}</p> */}
        <div className="rd-price">
          <div className="rd-off-price">
            <span>₹ {Math.floor(item.originalPrice - item.originalPrice * (item.discountPercentage / 100))}</span>
            {/* <span>₹ {item.originalPrice}</span> */}
            {/* </div>
          <div className="rd-rs-off"> */}
            <span className="rd-off-rs">₹ {item.originalPrice}</span>
            <span className="rd-off-p">{item.discountPercentage}% off</span>
          </div>
        </div>
        {/* <div className="pd-price">
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
        </div> */}
      </div>
    </div>
  );
};

export default RecentlyViewedComponent;
