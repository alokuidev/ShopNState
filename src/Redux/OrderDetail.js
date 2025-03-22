import { createSlice } from "@reduxjs/toolkit";

const OrderDetail = createSlice({
    name:'orderDetail',
    initialState:{},
    reducers:{
        userOrderDetail:(state,action) => {
            return { ...state,...action.payload}
        }
    }
})

export const {userOrderDetail} = OrderDetail.actions;

export default OrderDetail.reducer;