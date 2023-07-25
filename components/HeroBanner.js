import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { BiArrowBack } from 'react-icons/bi';
const HeroBanner = () => {
    return (
        <div className='relative text-white w-full text-[20px] max-w-[1360px] mx-auto '>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90" onClick={clickHandler}>
                        <BiArrowBack className='text-sm md:text-lg'/>
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90" onClick={clickHandler}>
                        <BiArrowBack className='rotate-180 text-sm md:text-lg'/>
                    </div>
                )}
            >
                <div>
                    <img src="assets/slide-1.png" className='aspect-[16/10] md:aspect-auto object-cover' alt="slide-1"/>
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">Shop now</div>
                </div>
                <div>
                    <img src="assets/slide-2.png" className='aspect-[16/10] md:aspect-auto object-cover' alt="slide-2"/>
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">Shop now</div>
                </div>
                <div>
                    <img src="assets/slide-3.png" className='aspect-[16/10] md:aspect-auto object-cover' alt="slide-3"/>
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">Shop now</div>
                </div>
            </Carousel>
        </div>
    )
}

export default HeroBanner