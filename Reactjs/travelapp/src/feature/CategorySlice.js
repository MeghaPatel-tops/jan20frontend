import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import db,{storage} from "../Firebase/db";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createCategory = createAsyncThunk('createCategory',async(data,{rejectWithValue})=>{
    try {
        console.log(data.catimg);
        
        const fileName = Date.now() + "_" + data.catimg;

        const refUpload = ref(storage, `category/${fileName}`);

        await uploadBytes(refUpload,data.catimg);
        const imageURL = await getDownloadURL(refUpload);

        let docRef =  collection(db,"category");
        const res = await addDoc(docRef,{
            name:data.categoryname,
            slug:data.slug,
            catimg:imageURL
        });
        return {msg:"Category Created",code:1}
    } catch (error) {
         return rejectWithValue(error.message);
    }
})

const CategorySlice = createSlice({
    name:'category',
    initialState:{
        singleCategory:{},
        catMsg:null,
        catError:null,
        catLoader:false,
        categoryArray:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createCategory.pending,(state,action)=>{
            state.catLoader=true;
        })
        .addCase(createCategory.fulfilled,(state,action)=>{
             state.catLoader=false;
             state.catMsg=action.payload.msg;
        })
         .addCase(createCategory.rejected,(state,action)=>{
             state.catLoader=false;
             state.catError=action.payload;
        })
    }
})

const CategoryReducer = CategorySlice.reducer;
export default CategoryReducer