import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../modules/redux/LoginPage/loginSlice";

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;