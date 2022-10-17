import React from "react";
import CardHeader from "./CardHeader";
import PopularProduct from "./PopularProduct";
import "./TopDealsStyles.css";

const TopDeals = () => {

    const productDetails=[
        {
            img:"https://rukminim1.flixcart.com/image/150/150/kuczmvk0/faucet/g/l/i/wall-mount-installation-type-prime-flexible-sink-cock-black-with-original-imag7hxmr27stye6.jpeg?q=70",
            title:"Shower Room Accessories",
            off:"Up to 70% Off",
            brand:"Popular Brand"
        },
        {
            img:"https://rukminim1.flixcart.com/image/150/150/k6gsk280/top/f/f/h/xl-211667801-only-original-imafzwjhbrj6ceue.jpeg?q=70",
            title:"Crop Tops, Bra, Jumpsuits...",
            off:"50 - 80% Off",
            brand:"ONLY, Amante, Sassafras, Lee..."
        },
        {
            img:"https://rukminim1.flixcart.com/image/150/150/ktop5e80/watch/f/q/e/1-lcs-4230-lois-caron-men-original-imag6zfy4nqjnxaf.jpeg?q=70",
            title:"Titan, Fastrack, Sonata..",
            off:"Upto 70%Off+Extra 10%",
            brand:"Best Selling Styles!"
        },
        {
            img:"https://rukminim1.flixcart.com/image/150/150/kka1si80/cushion-pillow-cover/i/m/6/turkish-print-vendola-original-imafzzfyayggd4zh.jpeg?q=70",
            title:"Home Furnishing Range",
            off:"Upto 80% OFF",
            brand:"-"
        },
        {
            img:"https://rukminim1.flixcart.com/image/150/150/ksj9dow0/necklace-chain/8/w/v/1-gini-102-necklace-set-rofarword-original-imag62xreej8ysmg.jpeg?q=70",
            title:"Necklaces, Earrings...",
            off:"From₹99+Extra 10% Off",
            brand:"Shop Now"
        },
        {
            img:"https://rukminim1.flixcart.com/image/150/150/kzn17680/shoe/i/v/e/6-cross-red-6-fosty-red-original-imagbm5s9utg6yjz.jpeg?q=70",
            title:"Lowest Price Ever!",
            off:"Under ₹249",
            brand:"Men's Casual Shoes & more"
        },
        {
            img:"https://rukminim1.flixcart.com/image/150/150/l2xmqvk0/shoe/o/9/9/6-blk-482-40-bruton-black-red-original-image5y4dphgcjp9.jpeg?q=70",
            title:"Layasa, Bruton, Chevit...",
            off:"Under ₹599",
            brand:"Men's Casual Shoes"
        } 
    ]


  return (
    <div className="cards">
      <CardHeader title="Deals of the Day"/>
      <div className="all-products">
      {
        productDetails.map((item,index)=>(
            <PopularProduct item={item} index={index}/>
        ))
      }
      </div>
    </div>
  );
};

export default TopDeals;
