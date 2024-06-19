import { WishlistStorage } from "@/utils/storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistItems: []
}

export const wishlistSlice = createSlice({
    initialState,
    name: 'wishlist',
    reducers: {
        localWishlistItem: (state, action) => {
            if (action.payload) {
                state.wishlistItems = WishlistStorage.getWishlistItems()
            }
        },
        addToWishlist: (state, action) => {
            const item = state.wishlistItems.find(p => p.id === action.payload.id)

            if (item) {
                return;
            } else {
                state.wishlistItems.push({ ...action.payload });
                WishlistStorage.setWishlistItems(state.wishlistItems)
            }
        },
        removeFromWishlist: (state, action) => {
            const filterItem = state.wishlistItems.filter(p => p.id !== action.payload)
            state.wishlistItems = filterItem
            WishlistStorage.setWishlistItems(state.wishlistItems)
        },
        clearWishlist: (state, action) => {
            state.wishlistItems = []
            WishlistStorage.setWishlistItems(state.wishlistItems)
        }
    }
})

export const { localWishlistItem, addToWishlist, clearWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer