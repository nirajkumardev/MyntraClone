import { createSlice} from "@reduxjs/toolkit";

const itemslice=createSlice({
  name: 'items',
  initialState :[],
  reducers:{
    addinitialItems:(state,action)=>{
           return action.payload;
    }
  }
})

export const itemActions=itemslice.actions;
export default itemslice;