import { createSlice } from "@reduxjs/toolkit";

 const CounterSlice = createSlice({
    name:"counter",
    initialState:{
        counter:100
    },
    reducers:{
        incre:(state,action)=>{
            state.counter=state.counter + 1
        },
         decre:(state,action)=>{ 
            state.counter=state.counter - 1
        }
    }

})

export default CounterSlice.reducer;
export const  {incre,decre} =  CounterSlice.actions;