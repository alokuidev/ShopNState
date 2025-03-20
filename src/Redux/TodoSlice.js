import { createSlice } from '@reduxjs/toolkit'


const TodoSlice = createSlice({
    name:'Todo',
    initialState:[],
    reducers:{
        addCart:(state,action) => {
            
            const itemIndex = state.findIndex((item) => item.id === action.payload.id);
            if (itemIndex !== -1) {
                // Product exists, increase quantity
                state[itemIndex].quantity += 1;
              } else {
                // New product, set quantity to 1
                state.push({ ...action.payload, quantity: 1 });
              }
              //console.log(JSON.parse(JSON.stringify(state)));
        },
        removeCart:(state,action) => { 
            const itemIndex = state.findIndex((item) => item.id === action.payload.id);
            if(itemIndex != -1){
              state[itemIndex].quantity -=1;

              if(state[itemIndex].quantity === 0){
                state.splice(itemIndex, 1);
              }
            }
        }

    }
})

export const {addCart, removeCart, userDetailSubmit} = TodoSlice.actions;

export default TodoSlice.reducer;