import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
    return (
        <Link href="/product/1" className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
            <img src="/assets/p1.png" />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">Air Jordan XXXVII Low PF</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">₹16295</p>
                    <p className="text-base font-medium line-through">₹18295</p>
                    <p className="ml-auto text-base font-medium text-green-500">10.93% off</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard