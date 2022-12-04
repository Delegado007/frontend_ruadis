import { combineReducers } from "redux";
import filesReducer from '../slices/filesSlice';
import paginationReducer from '../slices/paginatioSlice'
import storeCartSlice from '../slices/cartShop'

export const rootReducer = combineReducers({
  files: filesReducer,
  pagination: paginationReducer,
  shopCart: storeCartSlice,
});