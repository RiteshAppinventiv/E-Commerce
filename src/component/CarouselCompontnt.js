import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./CarouselComponentStyle.css"

const CarouselCompontnt = () => {
  return (
    <div className='carousel'>
        <Carousel className='images' autoPlay={true}
 infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false}>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/2f0924d238f8248e.jpg?q=50" alt='img1'/>
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/e67643936e002679.jpg?q=50" alt='img2'/>
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/c011fb2a7a18a0d5.jpg?q=50" alt='img3'/>
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/6bd47b2bdcdc710c.jpg?q=50" alt='img4'/>

                </div>
            </Carousel>
    </div>
  )
}

export default CarouselCompontnt;