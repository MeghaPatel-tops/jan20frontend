import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../feature/CategorySlice";
import Category from "../Admin/Category";
import DestinationReducer from "../feature/DestinationSlice";
import HotelReducer from "../feature/HotelSlice";

const store = configureStore({
    reducer:{
        category:CategoryReducer,
        destination:DestinationReducer,
        hotel:HotelReducer
    }
})

export default store