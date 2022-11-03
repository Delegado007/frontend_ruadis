import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFiles } from "../api";

const initialState = {
  files: [],
}

export const fetchFiles = createAsyncThunk(
  'files/fetchFiles',
  async (_, { dispatch }) => {
    const filesRes = await getFiles();
    console.log(filesRes)
    dispatch(setFiles(filesRes))
  }
)

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFiles: (state, action) => {
      state.files = action.payload;
    }
  }
})

export const { setFiles } = filesSlice.actions;

export default filesSlice.reducer;