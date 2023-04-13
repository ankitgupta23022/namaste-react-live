import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  //here we are importing the cartSlice which was exporting reducer by default hence we are writing like this.
  reducer: {
    //cart is the actual name of the slice in the redux store which we are using in the app.
    cart: cartSlice,
  },
});

export default store;

/**
 * Create Store
 *  - configureStore() - RTK
 *
 * Provide my store to app
 *  - <Provider store = {store}> - import from react-redux
 *
 * Slice
 *  - RTK - createSlice({
 *          name: "",
 *          initialState:
 *          reducers: {
 *             addItem: (state, action)=> { state= action.payload}
 *          }
 *      })
 *    export const {addItem, removeItem} = cartSlice.actions;
 *    export default cartSlice.reducer;
 *
 * Put that Slice into Store
 *      - {
 *        reducer: {
 *             cart: cartSlice,
 *             user: userSlice
 *         }
 * }
 *
 * */
