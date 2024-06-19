const CartStorage = {
    getCartItems: () => JSON.parse(localStorage.getItem('cart-items')),
    setCartItems: (data) => localStorage.setItem('cart-items', JSON.stringify(data)),
    // clearStorage: () => localStorage.clear()
}

const WishlistStorage = {
    getWishlistItems: () => JSON.parse(localStorage.getItem('wishlist-items')),
    setWishlistItems: (data) => localStorage.setItem('wishlist-items', JSON.stringify(data)),
    // clearStorage: () => localStorage.clear()
}

export { CartStorage, WishlistStorage };