'use client'
import { WishlistStorage } from '@/utils/storage';
import { useEffect, useState } from 'react'


export const useWishlistExist = (id) => {
    const [wishlist, setWishlist] = useState(false);
    useEffect(() => {
        const wishlistData = WishlistStorage.getWishlistItems();
        const productExist = wishlistData?.find(p => p.id == id)
        console.log(productExist);
        if (productExist) {
            setWishlist(true)
        }
    }, [])

    return [wishlist, setWishlist]
}
