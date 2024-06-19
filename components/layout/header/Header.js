import React, { useEffect, useState } from 'react'
import Wrapper from '../Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { fetchDataFromAPI } from '@/utils/axios';
import { useQuery } from '@tanstack/react-query';

//Icons
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { localCartItem } from '@/store/cartSlice';
import { CartStorage, WishlistStorage } from '@/utils/storage';
import { localWishlistItem } from '@/store/wishlistSlice';

export const getCategories = async () => {
    const { data } = await fetchDataFromAPI('/categories?populate=*')
    return data
};
const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const cartItemLength = useSelector((state) => state?.cart?.cartItems?.length)
    const wishlistItemLength = useSelector((state) => state?.wishlist?.wishlistItems?.length)
    const dispatch = useDispatch();

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    })
    useEffect(() => {
        dispatch(localCartItem(CartStorage.getCartItems()))
        dispatch(localWishlistItem(WishlistStorage.getWishlistItems()))
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', controlNavigation)
        return () => {
            window.removeEventListener('scroll', controlNavigation)
        }
    }, [lastScrollY])

    const controlNavigation = () => {
        const currentScrollY = window.scrollY;
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(currentScrollY);
    }
    return (
        <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}  `}>
            <Wrapper className="h-[60px] flex justify-between items-center">
                <Link href='/' prefetch={false}>
                    <img src='/assets/logo.svg' className='w-[50px] md:w-[80px]' alt="logo" />
                </Link>

                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    categories={categories}
                />
                {mobileMenu &&
                    <MobileMenu
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                        categories={categories}
                    />
                }
                {/* Icons Start */}
                <div className='flex gap-2 text-black items-center'>
                    <Link href="/wishlist">
                        <div className='w-8 md:w-12 h-8 md:h-12 flex rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
                            <IoMdHeartEmpty className='text-[19px] md:text-[24px]' />
                            {wishlistItemLength > 0 &&
                                <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white
                        text-[10px] md:text-[12px] flex items-center justify-center px-[2px] md:px-[2px]'>{wishlistItemLength}</div>}
                        </div>
                    </Link>
                    <Link href="/cart">
                        <div className='w-8 md:w-12 h-8 md:h-12 flex rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
                            <BsCart className='text-[15px] md:text-[20px]' />
                            {cartItemLength > 0 &&
                                <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white
                           text-[10px] md:text-[12px] flex items-center justify-center px-[2px] md:px-[2px]'>{cartItemLength}</div>
                            }

                        </div>
                    </Link>
                    {/* Icons End */}

                    {/* Mobile Menu Start */}
                    <div className='w-8 md:w-12 h-8 md:h-12 flex md:hidden rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2'>
                        {mobileMenu ? (
                            <VscChromeClose className='text-[16px] md:text-[20px]' onClick={() => setMobileMenu(false)} />
                        ) : (
                            <BiMenuAltRight className='text-[20px] md:text-[20px]' onClick={() => setMobileMenu(true)} />
                        )
                        }
                    </div>
                    {/* Mobile Menu End */}
                </div>
            </Wrapper>
        </header>
    )
}

export default Header 