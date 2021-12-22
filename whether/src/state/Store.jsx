import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";
import { myLogger } from "./whether/whether-actions";

export const store = createStore(rootReducer, compose(applyMiddleware(myLogger) , composeWithDevTools()));

export default store;