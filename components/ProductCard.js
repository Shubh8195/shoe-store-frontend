import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { discountedPrice } from "@/utils/helper";

import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '@/store/wishlistSlice';
import { useRouter } from 'next/router';
import { WishlistStorage } from '@/utils/storage';

// icons
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from "react-icons/io";
import { toast } from 'react-toastify';
import { useWishlistExist } from '@/hooks/useWishlistExist';

const ProductCard = ({ data: { attributes: p, id } }) => {
    const { pathname } = useRouter();
    const dispatch = useDispatch();
    const [wishlist, setWishlist] = useWishlistExist(id);
    return (
        <Link
            href={`/product/${p?.slug}`}
            prefetch={false}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
            <div className='absolute right-[2%] top-[2%] w-8 h-8 flex rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer hover:text-red-500'>
                {pathname === "/wishlist" ? (
                    <RiDeleteBin6Line
                        className='text-[19px]'
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(removeFromWishlist(id))
                            toast.error("Remove from your wishlist")
                        }} />
                ) : (
                    wishlist ? (
                        <IoMdHeart
                            className="text-[19px] md:text-[24px] text-red-500"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(removeFromWishlist(id))
                                setWishlist(false)
                                toast.error("Remove from your wishlist")

                            }}
                        />
                    ) : (
                        <IoMdHeartEmpty
                            className={`text-[19px] md:text-[24px] ${wishlist ? "text-red-500" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(addToWishlist({ attributes: p, id }))
                                setWishlist(true)
                                toast.success("Added to your wishlist")
                            }}
                        />
                    )

                )
                }



            </div>
            <Image src={p?.thumbnail?.data?.attributes?.url} width={500} height={500} alt={p?.name} />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-xs md:text-base font-medium">{p?.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">&#8377;{p?.price}</p>
                    {p.orignal_price && (
                        <>
                            <p className="text-base font-medium line-through">&#8377;{p?.orignal_price}</p>
                            <p className="ml-auto text-base font-medium text-green-500">{discountedPrice(p.orignal_price, p.price)}% off</p>
                        </>
                    )
                    }
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
