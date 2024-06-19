import EmptyCart from '@/components/EmptyCart'
import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/layout/Wrapper'
import { clearWishlist } from '@/store/wishlistSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const wishlist = () => {
    const dispatch = useDispatch()
    const wishlistItem = useSelector((state) => state?.wishlist?.wishlistItems)

    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                {wishlistItem.length > 0 ?
                    (
                        <React.Fragment>
                            {/* Page Title Start */}
                            <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                                <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                                    Wishlist
                                </div>
                            </div>
                            {/* Page Title End*/}
                            <div className='flex flex-col md:flex-row gap-12 py-10'>
                                {/* Wishlist Item Start */}
                                <div className='flex-[2]'>
                                    <div className='flex flex-row justify-between'>
                                        <div className='text-lg font-bold'>Wishlist Items</div>
                                        {/* Button Start */}
                                        <button className='bg-red-500 text-white w-[70px] rounded-md py-2 text-sm font-medium transition-transform active:scale-[.95]' onClick={() => {
                                            dispatch(clearWishlist())
                                            toast.error('Wishlist is empty')
                                        }}>Clear</button>
                                        {/* Button End */}
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 md:px-0 pb-5 my-4">
                                        {wishlistItem?.map((item) =>
                                            <ProductCard key={item?.id} data={item} />
                                        )}
                                    </div>
                                </div>
                                {/* Wishlist Item End */}
                            </div>
                        </React.Fragment>
                    ) :
                    (
                        <EmptyCart page={"wishlist"} />
                    )
                }
            </Wrapper>
        </div>
    )
}


export default wishlist