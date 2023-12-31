import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const iteminCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (iteminCart) {
        iteminCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

const cartReducer = cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
export default cartReducer;
