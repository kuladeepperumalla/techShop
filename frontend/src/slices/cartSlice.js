import { createSlice,  } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")?JSON.parse(localStorage.getItem('cart')): {cartItems: []}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x._id === item._id);

            existItem ? state.cartItems.map((x) =>  x._id === existItem._id ? item : x) :
            state.cartItems = [...state.cartItems]
        }
    }
})

export default cartSlice.reducer;