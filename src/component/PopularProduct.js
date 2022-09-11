import React from 'react'
import "./TopDealsStyles.css"
import { Route, useHistory } from "react-router-dom";

const PopularProduct = ({item,index}) => {
  const history = useHistory();
  return (
    <div className="product" key={index} onClick={()=>{history.push(`/productDetails/${item.title}`)}}> 
          <img
            src={item.img}
            alt={item.title}
          />
          <p className="product-title">{item.title}</p>
          <p className="product-off">{item.off}</p>
          <p className="product-brand">{item.brand}</p>
        </div>
  )
}

export default PopularProduct