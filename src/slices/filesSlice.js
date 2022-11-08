import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFiles } from "../api";

const initialState = {
  files: [],
  count: 0,
  isSearch: false,
  isLoading: false,
  isEmptyResult: false,
  valueInputSearch: "",
}

export const fetchFiles = createAsyncThunk(
  'files/fetchFiles',
  async (pagination, { dispatch }) => {
    dispatch(setIsLoading(true))
    const filesRes = await getFiles(pagination.offset, pagination.limit);
    setTimeout(() => {
      dispatch(setFiles(filesRes.rows))
      dispatch(setCount(filesRes.count))
      dispatch(setIsLoading(false))
    }, 5000)
  }
)

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setIsSearch: (state, action) => {
      state.isSearch = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsEmptyResult: (state, action) => {
      state.isEmptyResult = action.payload;
    },
    setValueInputSearch: (state, action) => {
      state.valueInputSearch = action.payload;
    }
  }
})

export const { setFiles, setCount, setIsSearch, setIsLoading, setIsEmptyResult, setValueInputSearch } = filesSlice.actions;

export default filesSlice.reducer;