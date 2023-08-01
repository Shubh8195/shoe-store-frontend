import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const EmptyCart = () => {
    return (
        <div className='flex flex-col items-center pb-[50px] md:-mt-14'>
            <Image src='/assets/empty-cart.jpg' width={300} height={300} className='w-[300px] md:w-[400px]' alt="empty_cart" />
            <span className='text-lg md:text-xl font-bold mb-5'>Your cart is empty</span>
            <span className='text-md  text-center'>
                Looks like you have not added anything in your cart.
                <br />Go ahead and explore top categories.
            </span>
            <Link className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8' href="/" >Continue Shopping</Link>
        </div>
    )
}
export default EmptyCart