import React from "react";
import Catagory from "./Catagory";
import "./CategoryStyles.css";

const categories_List=[
  {
    title:"Top Offers",
    img:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
  },
  {
    title:"Grocery",
    img:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
  },
  {
    title:"Mobiles",
    img:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
  },
  {
    title:"Fashion",
    img:"	https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
  },
  {
    title:"Electronics",
    img:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
  },
  {
    title:"Home",
    img:"https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
  },
  {
    title:"Appliances",
    img:"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
  },
  {
    title:"Travel",
    img:"https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
  },
  {
    title:"Beauty, Toys & More",
    img:"https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
  },


]

const Categories = () => {

  return (
    <div className="categories">
      {
        categories_List.map((item,index)=>(
          <Catagory item={item} index={index}/>
        ))
      }
    </div>
  );
};

export default Categories;
