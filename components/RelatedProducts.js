import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1023, min: 768 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1
    }
};
const RelatedProducts = ({ products }) => {
    return (
        <>
            <div className='text-2xl font-bold mb-5'>
                You Might Also Like
            </div>
            <Carousel responsive={responsive} containerClass="-mx-[10px]" itemClass='px-[10px]'>
                {products?.map((product) => (
                    <ProductCard key={product?.id} data={product} />
                ))}
            </Carousel>
        </>
    )
}

export default RelatedProducts