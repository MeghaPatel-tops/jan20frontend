import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import db,{storage} from "../Firebase/db";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createCategory = createAsyncThunk('createCategory',async(data,{rejectWithValue})=>{
    try {
       console.log(data);
       
        let docRef =  collection(db,"TravelCategory");
        const res = await addDoc(docRef,{
            name:data.name,
            slug:data.slug,
            catimg:data.catimg
        });
        console.log(res);
        
        return {msg:"Category Created",code:1}
    } catch (error) {
        console.log(error);
        
         return rejectWithValue(error.message);
    }
})

export const getCategory= createAsyncThunk('getCategory',async()=>{
    try {
        let qSnapShort = await getDocs(collection(db,'TravelCategory'));
        let CatArray=[];

        qSnapShort.forEach((doc)=>{
            CatArray.push({...doc.data(),id:doc.id})
        })

        return {cate:CatArray}
        
    } catch (error) {
        return error
    }
})

export const getCategoryById= createAsyncThunk('getCategoryById',async(id)=>{
    try {
        let docRef = doc(db,'TravelCategory',id);

        let catData = await getDoc(docRef)

        return catData.data();
    } catch (error) {
        return error
    }
})

export const updateCategory = createAsyncThunk('updateCategory',async(data)=>{
    try {
        const docRef = doc(db,'TravelCategory',data.id);
        const res = await updateDoc(docRef,data.cat)
        return {msg:"Updated successfully!"}
    } catch (error) {
        return error
    }
})

export const delCategory = createAsyncThunk('delCategory',async(id)=>{
    try {
        const docRef = doc(db,'TravelCategory',id);
        const res =  await deleteDoc(docRef);
        return {msg:"Deleted successfully"}
    } catch (error) {
        return error
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
    reducers:{
         clearMessage: (state) => {
            state.catMsg = null;
            state.catError = null;
        },
        clearSingleCategory: (state) => {
            state.singleCategory = {};
        }
    },
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
        .addCase(getCategory.pending,(state,action)=>{
            state.catLoader=true;
        })
        .addCase(getCategory.fulfilled,(state,action)=>{
            
             state.catLoader=false;
             state.categoryArray=action.payload.cate;
        })
         .addCase(getCategory.rejected,(state,action)=>{
             state.catLoader=false;
             state.catError=action.payload;
        }).addCase(delCategory.pending,(state,action)=>{
            state.catLoader=true;
        })
        .addCase(delCategory.fulfilled,(state,action)=>{
            
             state.catLoader=false;
             state.catMsg=action.payload.msg;
        })
         .addCase(delCategory.rejected,(state,action)=>{
             state.catLoader=false;
             state.catError=action.payload;
        })
        .addCase(getCategoryById.pending,(state,action)=>{
            state.catLoader=true;
        })
        .addCase(getCategoryById.fulfilled,(state,action)=>{
            
             state.catLoader=false;
             state.singleCategory=action.payload;
        })
         .addCase(getCategoryById.rejected,(state,action)=>{
             state.catLoader=false;
             state.catError=action.payload;
        }).addCase(updateCategory.pending,(state,action)=>{
            state.catLoader=true;
        })
        .addCase(updateCategory.fulfilled,(state,action)=>{
            
             state.catLoader=false;
             state.catMsg=action.payload.msg;
             state.singleCategory=null
        })
         .addCase(updateCategory.rejected,(state,action)=>{
             state.catLoader=false;
             state.catError=action.payload;
        })
    }
})

const CategoryReducer = CategorySlice.reducer;
export const { clearMessage, clearSingleCategory } = CategorySlice.actions;

export default CategoryReducer