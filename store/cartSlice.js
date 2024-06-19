
import { CartStorage } from "@/utils/storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        localCartItem: (state, action) => {
            if (action.payload) {
                state.cartItems = CartStorage.getCartItems()
            }
        },
        addToCart: (state, action) => {
            const item = state.cartItems.find((p) => p.id === action.payload.id)
            console.log(item);
            if (item) {
                item.quantity++
                item.attributes.price = item.oneQuantityPrice * item.quantity
                CartStorage.setCartItems(state.cartItems)
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
                CartStorage.setCartItems(state.cartItems)
            }
        },
        updateCart: (state, action) => {
            state.cartItems = state.cartItems.map((p) => {
                if (p.id === action.payload.id) {
                    if (action.payload.key === "quantity") {
                        p.attributes.price = p.oneQuantityPrice * action.payload.val
                    }
                    return { ...p, [action.payload.key]: action.payload.val }
                }
                return p
            })
            CartStorage.setCartItems(state.cartItems)
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
            CartStorage.setCartItems(state.cartItems)
        },
        clearCart: (state) => {
            state.cartItems = []
            CartStorage.setCartItems(state.cartItems)
        }

    },
})


export const { localCartItem, addToCart, removeFromCart, updateCart, clearCart } = cartSlice.actions

export default cartSlice.reducer 