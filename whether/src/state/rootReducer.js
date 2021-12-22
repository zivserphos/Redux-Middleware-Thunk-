import { combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import whetherReducer from "./whether/whether-reducer";
// import shopReducer from "./shopping/shopping-reducer";

const rootReducer = whetherReducer;

export default rootReducer;
