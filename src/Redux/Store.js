import { configureStore } from "@reduxjs/toolkit";

import TodoReducer from "./TodoSlice";

const store = configureStore({
    reducer:{
        cartList:TodoReducer
    }
})

export default store;