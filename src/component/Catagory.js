import React from 'react'
import "./CategoryStyles.css"

const Catagory = ({item,index}) => {
  // console.log(index);
  return (
    <div className="category" key={index}>
    <img
      src={item.img}
      alt="offer"
    />
    <p>{item.title}</p>
  </div>
  )
}

export default Catagory