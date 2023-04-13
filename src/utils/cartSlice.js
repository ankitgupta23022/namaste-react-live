import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartTotalPrice: 0,
  },
  reducers: {
    //addItem is the action AND we have the corresponding reducer function mapped to it.
    //state is the PREVIOUS state and action is the payload
    //And we never RETURN anything from the reducer function
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    //removeItem is the action AND we have the corresponding reducer function mapped to it.
    removeItem: (state, action) => {
      state.items.pop();
    },
    deleteItemById: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    //clearCart is the action AND we have the corresponding reducer function mapped to it.
    clearCart: (state) => {
      state.items = [];
      state.cartTotalPrice = 0;
    },

    addCartTotalPrice: (state, action) => {
      state.cartTotalPrice = state.cartTotalPrice + Number(action.payload);
    },

    subCartTotalPrice: (state, action) => {
      state.cartTotalPrice = state.cartTotalPrice - Number(action.payload);
    },
  },
});

export const {
  addItem,
  removeItem,
  deleteItemById,
  clearCart,
  addCartTotalPrice,
  subCartTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;

//Demo maybe cartSlice object looks like this, hence we are exporting it like above

// actions are named exports since there are many of them
// reducer is a default export since there is only one (Group of) reducer(s)

// cartSlice = {
//   actions: {
//     addItem,
//     removeItem,
//     clearCart
//   },
//   reducer: reducers
// }
