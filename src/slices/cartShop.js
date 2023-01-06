import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
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
    setUpdateItem: (state, action) => ({
      ...state,
      cartItems: state.cartItems.map(
        (content) => content.id === action.payload.id ? { ...content, priceToBuy: action.payload.priceToBuy }
          : content
      )
    }),
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload
    },
  }
})

export const { setCartItems, setDeleteItem, setTotalAmount, setUpdateItem } = storeCartSlice.actions;

export default storeCartSlice.reducer;