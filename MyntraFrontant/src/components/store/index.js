import {configureStore} from "@reduxjs/toolkit";
import itemslice from "./Itemslice";
import Fectching from "./fectchining";
import BagSlice from "./BagSlic";

 const Myntrastore=configureStore({
  reducer:{
    items: itemslice.reducer,
    fetchStatus:Fectching.reducer,
    Bag : BagSlice.reducer,
  }
})

export default Myntrastore;