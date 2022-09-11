import React from 'react'
import CardHeader from './CardHeader'
import RecentlyViewedComponent from './RecentlyViewedComponent'
import "./RecentlyViewedStyles.css"

function RecentlyViewed() {

const recentlyViewProducts=[
    {
        
        img:"https://rukminim1.flixcart.com/image/312/312/l19m93k0/mobile/w/0/6/-original-imagcv2dcyjzcmvd.jpeg?q=70",
        details:"POCO X4 Pro 5G(Laser Blue,128 GB)",
        rating:"4.1 ✩",
        ratingUser:"(9,326)",
        price:"From ₹99.00"
    },
    {
        img:"https://rukminim1.flixcart.com/image/200/200/kn97te80/backpack/f/8/o/boho-03-bpboh3gry-backpack-skybags-original-imagfyx4m85wp6te.jpeg?q=70",
        details:"Stylish Backpacks",
        rating:"4.1 ✩",
        ratingUser:"(1,326)",
        price:"From ₹599"
    },
    {
        img:"https://rukminim1.flixcart.com/image/200/200/l432ikw0/headphone/n/g/n/-original-imagf2yzeffezg4g.jpeg?q=70",
        details:"Gaming TWS",
        rating:"4.1 ✩",
        ratingUser:"(2,326)",
        price:"From ₹899"
    },
    {
        img:"https://rukminim1.flixcart.com/image/200/200/kr3tj0w0/bottle/m/d/j/cola-stainless-steel-insulated-8-hours-hot-and-cold-flask-original-imag4z2fv5qjj5me.jpeg?q=70",
        details:"Flask",
        rating:"4.0 ✩",
        ratingUser:"(326)",
        price:"From ₹399"
    },
    {
        img:"https://rukminim1.flixcart.com/image/312/312/l19m93k0/mobile/w/0/6/-original-imagcv2dcyjzcmvd.jpeg?q=70",
        details:"POCO X4 Pro 5G(Laser Blue,128 GB)",
        rating:"4.1 ✩",
        ratingUser:"(9,326)",
        price:"From ₹99.00"
    },       
    {
        img:"https://rukminim1.flixcart.com/image/200/200/kn97te80/backpack/f/8/o/boho-03-bpboh3gry-backpack-skybags-original-imagfyx4m85wp6te.jpeg?q=70",
        details:"Stylish Backpacks",
        rating:"4.1 ✩",
        ratingUser:"(1,326)",
        price:"From ₹599"
    },
    {
        img:"https://rukminim1.flixcart.com/image/200/200/l432ikw0/headphone/n/g/n/-original-imagf2yzeffezg4g.jpeg?q=70",
        details:"Gaming TWS",
        rating:"4.1 ✩",
        ratingUser:"(2,326)",
        price:"From ₹899"
    },
    {
        img:"https://rukminim1.flixcart.com/image/200/200/kr3tj0w0/bottle/m/d/j/cola-stainless-steel-insulated-8-hours-hot-and-cold-flask-original-imag4z2fv5qjj5me.jpeg?q=70",
        details:"Flask",
        rating:"4.0 ✩",
        ratingUser:"(326)",
        price:"From ₹399"
    }
]

  return (
    <div className="card">
      <CardHeader title="Recently Viewed"/>
      <div className="all-products">
      {
        recentlyViewProducts.map((item,index)=>(
            <RecentlyViewedComponent item={item} index={index}/>
        ))
      }
      </div>
    </div>
  )
}

export default RecentlyViewed