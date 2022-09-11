import React from "react";
// import { Route, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { allProducts, productList0, productList1, productList2, productList3, productList4, productList5, productList6 } from "../constant";
import ProductCategoriesDetailsSub from "./ProductCategoriesDetailsSub";

const ProductCategoriesDetails = () => {
    const { name } = useParams();
    document.title="Product Details Page" 
    let productList=[]

    if(name.includes("Shower"))
      productList=productList0
    else if(name.includes("Crop Tops, Bra"))
      productList=productList1    
    else if(name.includes("Titan, Fastrack, Sonata"))
      productList=productList2
    else if(name.includes("Home Furnishing"))
      productList=productList3
    else if(name.includes("Necklaces, Earrings"))
      productList=productList4 
    else if(name.includes("Lowest Price"))
      productList=productList5
    else if(name.includes("Layasa, Bruton, Chevit"))
      productList=productList6
    else if(name.includes("all"))
    productList=allProducts
      
    
  return (
    <div>
      <div>
      {
          productList.map((item,index)=>(
            <ProductCategoriesDetailsSub item={item} index={index}/>
          ))
        }
      </div>
    </div>
  );
};

export default ProductCategoriesDetails;
