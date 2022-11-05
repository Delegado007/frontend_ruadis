import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nextPage: false,
  prevPage: false,
  paginationValues: {
    offset: 0,
    limit: 12,
  },
  actualPage: 1,
}

export const paginationSlice = createSlice({
  name: 'paginationData',
  initialState,
  reducers: {
    setNextPage: (state, action) => {
      state.nextPage = action.payload;
    },
    setPrevPage: (state, action) => {
      state.prevPage = action.payload;
    },
    setPagination: (state, action) => {
      state.paginationValues = action.payload;
    },
    setActualPage: (state, action) => {
      state.actualPage = action.payload;
    }
  },
});

export const { setNextPage, setPrevPage, setPagination, setActualPage } = paginationSlice.actions;

export default paginationSlice.reducer;