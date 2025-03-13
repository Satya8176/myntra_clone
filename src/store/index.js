import { configureStore } from "@reduxjs/toolkit";
import itemSice from "./itemSlice";
import fetchStatusSice from "./fetchingStatus";
import bagSice from "./bagSlice";

const myntraStore=configureStore({
    reducer:{
        items:itemSice.reducer,
        fetchingStatus:fetchStatusSice.reducer,
        bag:bagSice.reducer,
    }
})

export default myntraStore