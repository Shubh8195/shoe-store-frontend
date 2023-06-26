import React from 'react'

import Wrapper from '@/components/layout/Wrapper'
import { IoMdHeartEmpty } from 'react-icons/io'
import ProductCarousel from '@/components/ProductCarousel'
import RelatedProducts from '@/components/RelatedProducts'

const ProductDetail = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* Left Column Start */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] md:min-w-[500px] lg:max-w-[700px] mx-auto lg:mx-0'>
                        <ProductCarousel />
                    </div>
                    {/* Left Column End */}


                    {/* Right Column Start */}
                    <div className='flex-[1] py-3'>
                        {/* Product Title */}
                        <div className='text-[34px] font-semibold leading-tight mb-5'>
                            Air Jordan XXXVII Low PF
                        </div>

                        {/* Product SubTitle */}
                        <div className='text-lg font-semibold leading-tight mb-5'>
                            Men's Basketball Shoes
                        </div>

                        {/* Product Price */}
                        <div className='flex items-center'>
                            <p className='mr-2 text-lg font-semibold'>MRP : ₹16999 </p>
                            <p className='text-lg line-through font-medium'> ₹18999</p>
                            <p className='text-green-500 font-medium ml-auto'>10.93% off</p>
                        </div>
                        <div className='text-lg font-medium text-gray-400'>incl. of taxes</div>
                        <div className='text-lg font-medium text-gray-400 mb-20'>{`(Also includes all applicable duties)`}</div>

                        {/* Product Sizes */}
                        <div className='mb-10'>
                            <div className='flex justify-between mb-2 '>
                                <p className='text-lg font-semibold'>Select Sizes</p>
                                <p className='text-lg font-medium text-black/[0.5] cursor-pointer'>Select Guide</p>
                            </div>
                            <div className='grid grid-cols-3 gap-2'>
                                <button className='border rounded-md text-center py-3 hover:border-black'>UK 6</button>
                                <button className='border rounded-md text-center py-3 hover:border-black'>UK 6.5</button>
                                <button className='border rounded-md text-center py-3 hover:border-black'>UK 7</button>
                                <button className='border rounded-md text-center py-3 hover:border-black'>UK 7.5</button>
                                <button className='border rounded-md text-center py-3 hover:border-black'>UK 8</button>
                                <button className='border rounded-md text-center py-3 hover:border-black'>UK 8.5</button>
                                <button className='border rounded-md text-center py-3 hover:border-black'>UK 9</button>
                                <button className='border rounded-md text-center py-3 hover:border-black'>UK 9.5</button>
                                <button className='border rounded-md text-center py-3 hover:border-black'>UK 10</button>
                                <button className='border rounded-md text-center py-3 hover:border-black'>UK 10.5</button>
                                <button className='border rounded-md text-center py-3 hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50'>UK 11</button>
                                <button className='border rounded-md text-center py-3 hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50'>UK 11.5</button>
                            </div>
                            {/* Error Message */}
                            <div className='text-red-500 font-normal text-md'>Size Selection is required</div>
                        </div>

                        {/* Cart & Whishlist Buttons */}
                        <button className='bg-black text-white w-full rounded-full py-4 text-lg mb-4 font-medium transition-transform active:scale-[.95]'>Add to Cart</button>
                        <button className='border border-black w-full rounded-full py-4 text-lg font-medium transition-transform active:scale-[.95] flex items-center  justify-center gap-1 hover:opacity-75 mb-10'>Whislist <IoMdHeartEmpty size={20} /></button>

                        {/* Product Description */}
                        <div className='w-full'>
                            <div className='text-lg font-bold mb-5'>
                                Product Details
                            </div>
                            <div className='text-md mb-5'>
                                "You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts.
                            </div>
                            <div className='text-md mb-5'>
                                "You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts.
                            </div>
                        </div>
                    </div>
                    {/* Right Column End */}
                </div>

                <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>
                    <RelatedProducts />
                </div>
            </Wrapper>
        </div>
    )
}

export default ProductDetail