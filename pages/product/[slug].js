import React, { useEffect, useState } from 'react'

import Wrapper from '@/components/layout/Wrapper'
import { IoMdHeartEmpty } from 'react-icons/io'
import ProductCarousel from '@/components/ProductCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import { fetchDataFromAPI } from '@/utils/axios'
import { useQuery } from '@tanstack/react-query'
import { discountedPrice } from '@/utils/helper'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/store/cartSlice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const getProduct = async (slug) => {
    const product = await fetchDataFromAPI(`/products?populate=*&filters[slug][$eq]=${slug}`);
    return product
};

const ProductDetail = ({ product, slug, relatedProducts }) => {
    const {query} = useRouter();
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setSelectedSize("")
        setShowError(false)
    },[query])

    const { data: productDetail, isLoading } = useQuery({
        queryKey: [`product=${slug}`],
        queryFn: () => getProduct(slug),
        initialData: product,
    })

    const p = productDetail[0]?.attributes

    const sizeSelectionError = () => {
        if (!selectedSize) {
            document.getElementById("sizeGrid").scrollIntoView({
                block: "center",
                behavior: "smooth"
            })
            setShowError(true)
            return
        }
        setShowError(false)
        dispatch(addToCart({ ...productDetail[0], selectedSize, oneQuantityPrice: p?.price }))
        toast.success('Product added to the cart')
    }
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* Left Column Start */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] md:min-w-[500px] lg:max-w-[700px] mx-auto lg:mx-0'>
                        <ProductCarousel data={p?.image} />
                    </div>
                    {/* Left Column End */}


                    {/* Right Column Start */}
                    <div className='flex-[1] py-3'>
                        {/* Product Title */}
                        <div className='text-[34px] font-semibold leading-tight mb-5'>
                            {p?.name}
                        </div>

                        {/* Product SubTitle */}
                        <div className='text-lg font-semibold leading-tight mb-5'>
                            {p?.subtitle}
                        </div>

                        {/* Product Categories */}
                        <div className='text-lg font-semibold leading-tight mb-5'>
                            {p?.categories?.data?.map((c) =>
                                <span key={c.id} className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">{c.attributes.name}</span>
                            )}
                        </div>

                        {/* Product Price */}
                        <div className='flex items-center'>
                            <p className='mr-2 text-lg font-semibold'>MRP : ₹{productDetail[0]?.attributes.price} </p>
                            {p?.orignal_price &&
                                <React.Fragment>
                                    <p className='text-lg line-through font-medium'> ₹{productDetail[0]?.attributes.orignal_price}</p>
                                    <p className='text-green-500 font-medium ml-auto'>{discountedPrice(p?.orignal_price, p?.price)}% off</p>
                                </React.Fragment>
                            }
                        </div>
                        <div className='text-lg font-medium text-gray-400'>incl. of taxes</div>
                        <div className='text-lg font-medium text-gray-400 mb-20'>{`(Also includes all applicable duties)`}</div>

                        {/* Product Sizes */}
                        <div id="sizeGrid" className='mb-10'>
                            <div className='flex justify-between mb-2 '>
                                <p className='text-lg font-semibold'>Select Sizes</p>
                                <p className='text-lg font-medium text-black/[0.5] cursor-pointer'>Select Guide</p>
                            </div>
                            <div className='grid grid-cols-3 gap-2'>
                                {p?.size?.data.map((p, index) =>
                                    <button
                                        key={index}
                                        onClick={() => {
                                            selectedSize === p.size ? setSelectedSize("") : setSelectedSize(p.size)
                                            setShowError(false)
                                        }}
                                        className={`border rounded-md text-center py-3 hover:border-black disabled:bg-black/[0.07] disabled:text-gray-500 disabled:cursor-not-allowed ${selectedSize === p.size ? "border-black" : ""}`} disabled={!p.enabled}>{p.size}</button>
                                )}
                            </div>
                            {/* Error Message */}
                            {showError &&
                                <div className='text-red-500 font-normal text-md'>Size Selection is required</div>
                            }
                        </div>

                        {/* Cart & Whishlist Buttons */}
                        <button
                            onClick={sizeSelectionError}
                            className='bg-black text-white w-full rounded-full py-4 text-lg mb-4 font-medium transition-transform active:scale-[.95]' >Add to Cart</button>
                        <button className='border border-black w-full rounded-full py-4 text-lg font-medium transition-transform active:scale-[.95] flex items-center  justify-center gap-1 hover:opacity-75 mb-10'>Whislist <IoMdHeartEmpty size={20} /></button>

                        {/* Product Description */}
                        <div className='w-full'>
                            <div className='text-lg font-bold mb-5'>
                                Product Details
                            </div>
                            <div className='markdown text-md mb-5'>
                                <ReactMarkdown>
                                    {p?.description}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    {/* Right Column End */}
                </div>

                <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>
                    <RelatedProducts products={relatedProducts} />
                </div>
            </Wrapper >
        </div >

    )
}

export default ProductDetail

export async function getStaticPaths() {
    const { data: product } = await fetchDataFromAPI('/products')

    const paths = product?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const { data: product } = await fetchDataFromAPI(`/products?populate=*&filters[slug][$eq]=${slug}`)
    const { data: relatedProducts } = await fetchDataFromAPI(`/products?populate=*&[filters][slug][$ne]=${slug}`);
    return {
        props: {
            product,
            relatedProducts,
            slug,
        },
    }
}