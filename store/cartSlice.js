
import Storage from "@/utils/storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const item = state.cartItems.find((p) => p.id === action.payload.id)
            if (item) {
                item.quantity++
                item.attributes.price = item.oneQuantityPrice * item.quantity
                Storage.setCartItems(state.cartItems)
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
                Storage.setCartItems(state.cartItems)
            }
        },
        localCartItem: (state, action) => {
            if (action.payload) {
                state.cartItems = Storage.getCartItems()
            }
        }
    },
})


export const { addProduct, localCartItem } = cartSlice.actions

export default cartSlice.reducer