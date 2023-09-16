export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {

    // Calculate Items Price 
    state.itemsPrice = state.cartItems.reduce((acc, item) => addDecimals(acc + item.price * item.qty), 0)

    // Add shipping Fee
    // Note: if order is over $100 then shipping is FREE or else its $10 for shipping
    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)

    // Tax Fee
    // 13% CAD
    state.taxPrice = addDecimals(Number((0.12 * state.itemsPrice).toFixed(2)));

    // Total price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    localStorage.setItem('cart', JSON.stringify(state));

    return state;
}