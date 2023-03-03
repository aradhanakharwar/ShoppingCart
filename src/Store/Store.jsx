import { configureStore } from "@reduxjs/toolkit";
import apifetchReducer from './Slice/HomeSlice';
import CartSlice from "./Slice/CartSlice";

export const Store=configureStore({
    reducer:
    {
      api : apifetchReducer,
      cart : CartSlice
    },
})