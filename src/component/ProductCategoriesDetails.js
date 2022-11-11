import React, { useState, useEffect } from "react";
// import { Route, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { notifyError } from "../context/notificationContext";
import ProductCategoriesDetailsSub from "./ProductCategoriesDetailsSub";

import axios from "axios";
import { serverHost } from "../environment";
import ProductCatagoriesHighlightless from "./ProductCatagoriesHighlightless";
import "./ProductCategoriesDetailsStyle.css"

const ProductCategoriesDetails = () => {
  const [searchData, setSearchData] = useState([]);
  const { name } = useParams();

  
  useEffect(() => {
    // 👇️ only runs once
    console.log("useEffect ran");
    let data = {
      title: name,
    };
    console.log("data------",data);
    axios
      .post(`${serverHost}/api/product/search`, data)
      .then((res) => {
        console.log("ressssss", res.data);
        let newData=res.data.data
        console.log(newData);
        setSearchData(newData);
        console.log("searchData---", searchData);
        if(!res.data.data.length)
          // return notifyError("Currently No Product Avaliable");
        if (res.data.statusCode !== 200) {
          notifyError(res.data.message);
        }

      })
      .catch((err) => {
        console.log(err.message);
        //   props.setIsOpen(false);
        notifyError(err.message);
      });
  }, []); // 👈️ empty dependencies array

  
  document.title = "Product Details Page";

  return (
    <div >
      {
        searchData.length?
        <div className="product-main-div">
        {searchData.map((item, index) => (
          item.isHighlightShow?<ProductCategoriesDetailsSub item={{_id:item._id,img:item.productPictures[0],title:item.title,highlights:item.Highlights,ratting:item.avgRatting,...item}} index={index} />:
          <ProductCatagoriesHighlightless item={{_id:item._id,img:item.productPictures[0],title:item.title,highlights:item.Highlights,ratting:item.avgRatting,...item}} index={index} />
        ))}
      </div>:<centter>CURRENTLY NO DATA AVAILABLE</centter>
      }
    </div>
  );
};

export default ProductCategoriesDetails;
