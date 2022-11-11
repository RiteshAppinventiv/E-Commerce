import axios from "axios";
import React, { useEffect, useState } from "react";
import { notifyError } from "../context/notificationContext";
import { serverHost } from "../environment";
import CardHeader from "./CardHeader";
import RecentlyViewedComponent from "./RecentlyViewedComponent";
import "./RecentlyViewedStyles.css";

function RecentlyViewed() {
  const [searchData, setSearchData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  var array = JSON.parse(window.localStorage.getItem("recent")) || []; //the "|| []" replaces possible null from localStorage with empty array

  console.log("recent ", array);

  useEffect(() => {
    // 👇️ only runs once
    console.log("useEffect ran");
    let data = {
      ids: array,
    };
    console.log("data------", data);
    axios
      .post(`${serverHost}/api/product/recent`, data)
      .then((res) => {
        console.log("recent data", res.data);
        let newData = res.data.data;
        console.log(newData);
        setSearchData(newData);
        setIsLoaded(true);
        console.log("recent---", searchData);
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


  return array.length ? (
    <div className="cards">
      <CardHeader title="Recently Viewed" />
      {isLoaded ? (
        <div className="all-products">
          {searchData.map((item, index) => (
            <RecentlyViewedComponent
              item={{
                _id: item._id,
                img: item.productPictures[0],
                details: item.title,
                rating: item.avgRatting,
                ratingUser: item.totalRatting,
                originalPrice:item.originalPrice,
                discountPercentage:item.discountPercentage
              }}
              index={index}
            />
          ))}
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  ) : (
    ""
  );
}

export default RecentlyViewed;
