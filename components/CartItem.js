import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCart } from '@/store/cartSlice';
import Link from 'next/link';

const CartItem = ({ products }) => {
    const p = products?.attributes
    const { thumbnail } = products?.attributes;
    const dispatch = useDispatch();
    const data = useSelector((state) => state.cart.cartItems)

    const updateCartItem = (e, key) => {
        const payload = {
            key,
            val: key === "quantity" ? parseInt(e.target.value) : e?.target?.value,
            id: products.id
        }
        dispatch(updateCart(payload))
    }
    return (
        <div className='flex py-5 gap-3 md:gap-5 border-b'>
            <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
                <img src={thumbnail?.data?.attributes?.url} alt={p?.slug} />
            </div>
            <div className='w-full flex flex-col'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='text-lg md:text-2xl font-semibold text-black/[0.8]'>
                        <Link href={`/product/${p?.slug}`} className='hover:text-blue-500'>
                            {p?.name}
                        </Link>
                    </div>
                    <div className='text-sm font-semibold text-gray-400 block md:hidden'>
                        {p?.subtitle}
                    </div>
                    <div className='text-sm font-semibold text-gray-400 mt-2'>MRP : ₹{p?.price}</div>
                </div>
                <div className='text-sm font-semibold  text-gray-400 hidden md:block'>
                    {p?.subtitle}
                </div>
                <div className='flex items-center justify-between mt-4' >
                    <div className='flex gap-2 md:gap-10 items-center text-sm md:text-md text-black/[0.5]'>
                        <div className='flex items-center gap-1  '>
                            <div className='font-semibold '>Size :</div>
                            <select
                                onChange={(e) => updateCartItem(e, "selectedSize")}
                                className='text-black ' defaultValue={products.selectedSize}>
                                {p?.size?.data?.map((item, index) =>
                                    <option className="disabled:bg-black/[0.07]" key={index} value={item.size} disabled={!item.enabled}>{item.size}</option>
                                )}
                            </select>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className='font-semibold '>Quantity :</div>
                            <select
                                onChange={(e) => updateCartItem(e, "quantity")}
                                className='text-black'
                                defaultValue={products.quantity}>
                                {[...Array(10)].map((_, index) => (
                                    <option key={index} value={index + 1}>{index + 1}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line
                        onClick={() => dispatch(removeFromCart(products.id))}
                        className="text-black/[0.5] hover:text-red-400"
                        size={20}
                    />
                </div>
            </div>
        </div>
    )
}

export default CartItem