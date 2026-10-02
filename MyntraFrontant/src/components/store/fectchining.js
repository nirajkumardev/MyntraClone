import { createSlice} from "@reduxjs/toolkit";
const Fetching=createSlice({
  name: 'fetchStatus',
  initialState :
  {
    fetchdone:  false,
    currentlyFetching: false,
  },
  reducers:{
    markFetchdone:(state)=>{
       state.fetchdone=true;
    },
   markFetchigStarted:(state)=>{
      state.currentlyFetching=true;
    },
    markFetchingFinshided:(state)=>{
      state.currentlyFetching=false;
    }
  }
})

export const FectchAction=Fetching.actions;
export default Fetching;