import { createSlice, } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [] }

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // constnats
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x._id === item._id);

            // Adding items to existing items
            existItem ? state.cartItems.map((x) =>
                x._id === existItem._id ? item : x) :
                state.cartItems = [...state.cartItems, item]


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

            localStorage.setItem('cart', JSON.stringify(state))
        }
    }
})

export const { addToCart } = cartSlice.actions 

export default cartSlice.reducer;