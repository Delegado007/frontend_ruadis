import { combineReducers } from "redux";
import filesReducer from '../slices/filesSlice';

export const rootReducer = combineReducers({
  files: filesReducer,
});