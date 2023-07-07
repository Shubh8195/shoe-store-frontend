import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductCarousel = () => {
    return (
        <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className='productCarousel'
            >
                <img src="/assets/p1.png" alt="p1"/>
                <img src="/assets/p2.png" alt="p2"/>
                <img src="/assets/p3.png" alt="p3"/>
                <img src="/assets/p4.png" alt="p4"/>
                <img src="/assets/p5.png" alt="p5"/>
                <img src="/assets/p6.png" alt="p6"/>
                <img src="/assets/p7.png" alt="p7"/>
            </Carousel>
        </div>
    )
}

export default ProductCarousel