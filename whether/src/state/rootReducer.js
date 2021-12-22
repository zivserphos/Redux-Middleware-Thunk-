import { combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import whetherReducer from "./whether/whether-reducer";
// import shopReducer from "./shopping/shopping-reducer";

const rootReducer = combineReducers({ whetherReducer });

export default rootReducer;
