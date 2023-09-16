import { createSlice, } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";
const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [] }


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

                updateCart(state);
        }
    }
})

export const { addToCart } = cartSlice.actions 

export default cartSlice.reducer;