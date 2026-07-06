import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../feature/CategorySlice";
import Category from "../Admin/Category";

const store = configureStore({
    reducer:{
        category:CategoryReducer
    }
})

export default store