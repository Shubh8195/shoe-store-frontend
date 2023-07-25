import React, { useMemo, useState } from 'react'
import Wrapper from '@/components/layout/Wrapper'
import CartItem from '@/components/CartItem'
import EmptyCart from '@/components/EmptyCart'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '@/store/cartSlice'
import { toast } from 'react-toastify'

import { loadStripe } from '@stripe/stripe-js'
import { makePaymentRequest } from '@/utils/axios'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


const Cart = () => {
    const [loading, setLoading] = useState(false)
    const cartItem = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch();
    const subTotal = useMemo(() => {
        return cartItem?.reduce((total, value) => total + value.attributes.price, 0)
    }, [cartItem])

    const handlePayment = async () => {
        const payload = {
            products: cartItem
        }
        try {
            setLoading(true)
            const stripe = await stripePromise;
            const data = await makePaymentRequest('/orders', payload)
            await stripe.redirectToCheckout({
                sessionId: data.stripeSession.id
            })
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                {cartItem.length > 0 ?
                    (
                        <React.Fragment>
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
                                    <div className='flex flex-row justify-between'>
                                        <div className='text-lg font-bold'>Cart Items</div>
                                        {/* Button Start */}
                                        <button className='bg-red-500 text-white w-[70px] rounded-md py-2 text-sm font-medium transition-transform active:scale-[.95]' onClick={() => {
                                            dispatch(clearCart())
                                            toast.error('Cart is empty')
                                        }}>Clear</button>
                                        {/* Button End */}
                                    </div>
                                    {cartItem?.map((item, index) =>
                                        <CartItem key={index} products={item} />
                                    )}

                                </div>
                                {/* Cart Item End */}

                                {/* Summary Start */}
                                <div className='flex-[1]'>
                                    <div className='text-lg font-bold'>Summary</div>
                                    <div className='bg-black/[0.05] p-5 my-5 rounded-xl '>
                                        <div className='flex flex-col '>
                                            <div className='flex items-center justify-between'>
                                                <div className='text-md font-medium md:text-lg uppercase'>Subtotal</div>
                                                <div className='text-md font-medium md:text-lg'>₹{subTotal}</div>
                                            </div>
                                            <div className='text-sm md:text-md py-5 border-t mt-5'>
                                                The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include delivery costs and international transaction fees.
                                            </div>
                                        </div>
                                    </div>
                                    {/* Button Start */}
                                    <button
                                        onClick={handlePayment}
                                        className='bg-black text-white w-full rounded-full py-4 text-lg mb-4 font-medium transition-transform active:scale-[.95] flex flex-row items-center justify-center'>
                                        Checkout
                                        {loading && <img src='/assets/spinner.svg' alt="spinner" />}
                                    </button>
                                    {/* Button End */}
                                </div>
                                {/* Summary end */}
                            </div>
                        </React.Fragment>
                    ) :
                    (
                        <EmptyCart />
                    )
                }
            </Wrapper>
        </div>
    )
}
export default Cart