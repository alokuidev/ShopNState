import { createSlice } from "@reduxjs/toolkit";

const OrderDetail = createSlice({
    name:'orderDetail',
    initialState:[],
    reducers:{
        userDetail:(state) => { console.log(state)}
    }
})

export const {userDetail} = OrderDetail.actions;

export default OrderDetail.reducer;