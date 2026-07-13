import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../feature/CategorySlice";
import Category from "../Admin/Category";
import DestinationReducer from "../feature/DestinationSlice";

const store = configureStore({
    reducer:{
        category:CategoryReducer,
        destination:DestinationReducer
    }
})

export default store