const Storage = {
    getCartItems: () => JSON.parse(localStorage.getItem('cart-items')),
    setCartItems: (data) => localStorage.setItem('cart-items',JSON.stringify(data)),
    clearStorage: () => localStorage.clear()
}

export default Storage;