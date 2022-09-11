import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./CarouselComponentStyle.css"

const CarouselCompontnt = () => {
  return (
    <div>
        <Carousel className='images' autoPlay={true}
 infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false}>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/9b4f8ed53bbb67f1.jpg?q=50" alt='img1'/>
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/flap/1688/280/image/437930149933f312.jpg?q=50" alt='img2'/>
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/flap/1688/280/image/704c4f789678af37.jpg?q=50" alt='img3'/>
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/flap/1688/280/image/3b60ab0b5f476885.jpg?q=50" alt='img4'/>

                </div>
            </Carousel>
    </div>
  )
}

export default CarouselCompontnt;