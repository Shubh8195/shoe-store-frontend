import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = () => {
    return (
        <div className='flex py-5 gap-3 md:gap-5 border-b'>
            <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
                <img src="/assets/product-1.webp"  alt="thumbnail"/>
            </div>
            <div className='w-full flex flex-col'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='text-lg md:text-2xl font-semibold text-black/[0.8]'>Jordan Retro 6 G</div>
                    <div className='text-sm font-semibold text-gray-400 block md:hidden'>
                        Men's Golf Shoes
                    </div>
                    <div className='text-sm font-semibold text-gray-400 mt-2'>MRP : ₹19,695</div>
                </div>
                <div className='text-sm font-semibold  text-gray-400 hidden md:block'>
                    Men's Golf Shoes
                </div>
                <div className='flex items-center justify-between mt-4' >
                    <div className='flex gap-2 md:gap-10 items-center text-sm md:text-md text-black/[0.5]'>
                        <div className='flex items-center gap-1  '>
                            <div className='font-semibold '>Size :</div>
                            <select className='hover:text-black'>
                                <option value="UK 6">UK 6</option>
                                <option value="UK 6.5">UK 6-5</option>
                                <option value="UK 7">UK 7</option>
                            </select>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className='font-semibold '>Quantity :</div>
                            <select className='hover:text-black'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line className="text-black/[0.5] hover:text-red-400" size={20}/>
                </div>
            </div>
        </div>
    )
}

export default CartItem