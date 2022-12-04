import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
}

export const storeCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      const items = state.cartItems
      return { cartItems: [...items, action.payload] }
    },
    setDeleteItem: (state, action) => ({
      ...state,
      cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
    }),
  }
})

export const { setCartItems, setDeleteItem } = storeCartSlice.actions;

export default storeCartSlice.reducer;