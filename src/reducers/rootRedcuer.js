import { combineReducers } from "redux";
import filesReducer from '../slices/filesSlice';
import paginationReducer from '../slices/paginatioSlice'

export const rootReducer = combineReducers({
  files: filesReducer,
  pagination: paginationReducer,
});