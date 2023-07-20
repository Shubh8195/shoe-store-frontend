import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductCarousel = ({ data }) => {
    return (
        <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className='productCarousel'
            >
                {data.data.map((p) =>
                    <img key={p.id} src={p.attributes.url} alt="p1" />
                )}

            </Carousel>
        </div>
    )
}

export default ProductCarousel