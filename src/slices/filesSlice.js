import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFiles } from "../api";

const initialState = {
  files: [],
  count: 0,
  isSearch: false,
  valueInputSearch: ""
}

export const fetchFiles = createAsyncThunk(
  'files/fetchFiles',
  async (pagination, { dispatch }) => {
    const filesRes = await getFiles(pagination.offset, pagination.limit);
    dispatch(setFiles(filesRes.rows))
    dispatch(setCount(filesRes.count))
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
    setValueInputSearch: (state, action) => {
      state.valueInputSearch = action.payload;
    }
  }
})

export const { setFiles, setCount, setIsSearch, setValueInputSearch } = filesSlice.actions;

export default filesSlice.reducer;