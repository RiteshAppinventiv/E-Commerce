import React from "react";
import "./RecentlyViewedStyles.css";

const RecentlyViewedComponent = ({ item, index }) => {
  return (
    <div className="containers" key={index}>
      <div className="p-images">
        <img src={item.img} alt="mobile" />
        <p>🤍</p>
      </div>

      <div className='products'>

                <h6 className='p-details'>{item.details}</h6>
                <div className='p-ratting'>
                    <p className="rating">
                        {item.rating}
                    </p>
                    <p className='total-r'>{item.ratingUser}</p>
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" />
                </div>
                <p className='p-price'>{item.price}</p>
                </div>
    </div>
  );
};

export default RecentlyViewedComponent;
