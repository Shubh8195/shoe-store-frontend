import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Wrapper from '@/components/layout/Wrapper'
import CartItem from '@/components/CartItem'
import EmptyCart from './empty'

const cart = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                {/* Page Title Start */}
                <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                    <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                        Shopping Cart
                    </div>
                </div>
                {/* Page Title End*/}

                <div className='flex flex-col md:flex-row gap-12 py-10'>
                    {/* Cart Item Start */}
                    <div className='flex-[2]'>
                        <div className='text-lg font-bold'>Cart Items</div>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    {/* Cart Item End */}

                    {/* Summary Start */}
                    <div className='flex-[1]'>
                        <div className='text-lg font-bold'>Summary</div>
                        <div className='bg-black/[0.05] p-5 my-5 rounded-xl '>
                            <div className='flex flex-col '>
                                <div className='flex items-center justify-between'>
                                    <div className='text-md font-medium md:text-lg uppercase'>Subtotal</div>
                                    <div className='text-md font-medium md:text-lg'>₹16925</div>
                                </div>
                                <div className='text-sm md:text-md py-5 border-t mt-5'>
                                    The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include delivery costs and international transaction fees.
                                </div>
                            </div>
                        </div>
                        {/* Button Start */}
                        <button className='bg-black text-white w-full rounded-full py-4 text-lg mb-4 font-medium transition-transform active:scale-[.95]'>Checkout</button>
                        {/* Button End */}
                    </div>
                    {/* Summary end */}
                </div>

<EmptyCart />
            </Wrapper>
        </div>
    )
}
export default cart