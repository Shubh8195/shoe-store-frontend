export const discountedPrice = (orignal_price, price) => {
    return ((orignal_price - price) / orignal_price * 100).toFixed(2);
}