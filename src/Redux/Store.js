import { configureStore } from "@reduxjs/toolkit";
import OrderDetail from "./OrderDetail";
import TodoReducer from "./TodoSlice";

const store = configureStore({
    reducer:{
        cartList:TodoReducer,
        orderdetail:OrderDetail
    }
})

export default store;