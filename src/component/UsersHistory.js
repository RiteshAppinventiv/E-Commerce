import React from 'react'
import "./UsersHistoryStyle.css"

const productsHistory=[
  {
    key:"MOST SEARCHED FOR ON FLIPKART: ",
    value:"Google Pixel 6A | vivo T1X | OPPO Reno8 5G | OPPO Reno8 Pro 5G | Nothing Phone 1 | Sell Old Mobile Phones | ASUS TUF Gaming F15 Core i5 10th Gen | Electronics Store | OPPO A16KVivo Y33T | OPPO Reno7 5G | Bathroom Exhaust Fan | Samsung Window AC | OPPO Reno7 Pro 5G | iPhone 13 | iPhone 13 Pro | iPhone 13 Pro Max | iPhone 13 Mini | Flipkart Quick | Books | Flipkart Help Centre | Online Boat Store | Flipkart Track Orders | Flipkart Manage Orders | Flipkart Return Orders | Flipkart Gift Cards Store | Flipkart Axis Bank Credit Card | Flipkart Pay Later"
  },
  {
    key:"MOBILES: ",
    value:"iPhone 12 64GB | iPhone 12 Pro 512GB | iPhone 12 128GB | Vivo Y91i | Vivo Y11 | Vivo Y15 | Vivo Y50 | Vivo Y12 | Reno2 F | Oppo A12 | Oppo F15 | Oppo A31 | Samsung A71 | Samsung A51 | Samsung A31 | Realme X2 | iPhone 11 | iPhone 11 Pro | iPhone 11 Pro Max | Mobile Offers | iphone x4G Mobile | Nokia Mobile | Samsung Mobile | iphone | Oppo Mobile | Vivo Mobile"
  },
  {
    key:"CAMERA: ",
    value:"GoPro Action Camera | Nikon Camera | Canon Camera | Sony Camera | Canon DSLR | Nikon DSLR"
  },
  {
    key:"LAPTOPS: ",
    value:"MacBook Pro M2 | acer Ryzen 3 Dual Core 3250U - (8 GB/256 GB SSD/Windows 11 Home) Z2-493 Thin and Light Laptop | ASUS Vivobook S14 OLED (2022) | ASUS Zenbook 14 OLED (2022) | Realme Book Prime Core i5 11th Gen | Microsoft Surface Go Pentium 128GB | Branded Laptops | Apple Laptops | Acer Laptops | Lenovo Laptops | Dell Laptops | Asus Laptops | HP Laptops | Gaming Laptops | 2 in 1 Laptops | Laptops | Dell latest laptops 2022 | HP latest laptops 2022 | Infinix INBook X1 Neo Series Celeron Quad Core - (8 GB/256 GB SSD/Windows 11 Home) XL22 Thin and Light Laptop"
  }
]

const features=[
  {
    key:"Flipkart: The One-stop Shopping Destination",
    valye:"E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down."
  },
  {
    key:"Flipkart Plus",
    value:"A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more! What's more, you can even use the Flipkart supercoins for a number of exciting services, like An annual Zomato Gold membership An annual Hotstar Premium membership 6 months Gaana plus subscription Rupees 550 instant discount on flights on ixigo Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply."
  },
  {
    key:"No Cost EMI",
    value:"In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply."
  },
  {
    key:"EMI on Debit Cards",
    value:"Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply."
  },
  {
    key:"Mobile Exchange Offers",
    value:"Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply."
  }

]

// const UsersHistory = () => {
//   return (
//     <div className='story'>
//         <div className='heading'>
//             <p className='key' style={{float:"left"}}>Top Stories:</p>
//             <p className='value' style={{position:"relative",marginLeft:"281px"}}>Brand Directory</p>
//         </div>
//         {
//           productsHistory.map((item,index)=>(
//             <div className="heading" key={index}>
//               <div className='key' style={{float:"left"}}>"{item.key}"</div>
//               <div className='value' style={{position:"relative",marginLeft:"281px"}}>{item.value}</div>
//             </div>
//           ))
//         }
//     </div>
//   )
// }

const UsersHistory = () => {
  return (
    <div className='story'>
        <div className='heading'>
            <p className='key'>Top Stories:</p>
            <p>Brand Directory</p>
        </div>
        {
          productsHistory.map((item,index)=>(
            <div className="heading" key={index}>
              <span  className='key'>{item.key}</span>
              <span className='value'>{item.value}</span>
              
            </div>
          ))
        }
        
        {
          features.map((item,index)=>(
            <div className="heading" key={index}>
              <div  className='key'>{item.key}</div>
              <div className='value'>{item.value}</div>
              
            </div>
          ))
        }

    </div>
  )
}

export default UsersHistory;