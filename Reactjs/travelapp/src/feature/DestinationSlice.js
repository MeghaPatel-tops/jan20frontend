import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import db,{storage} from "../Firebase/db";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createDestination = createAsyncThunk('createDestination',async(data,{rejectWithValue})=>{
    try {
       console.log(data);
       
        let docRef =  collection(db,"destination");
        const res = await addDoc(docRef,data);
        console.log(res);
        
        return {msg:"Destination Created",code:1}
    } catch (error) {
        console.log(error);
        
         return rejectWithValue(error.message);
    }
})

export const getDestination= createAsyncThunk('getDestination',async()=>{
    try {
        let qSnapShort = await getDocs(collection(db,'destination'));
        let destArray=[];

        qSnapShort.forEach((doc)=>{
            destArray.push({...doc.data(),id:doc.id})
        })
         console.log(destArray);
         
        
        return {destination:destArray}
        
    } catch (error) {
        return error
    }
})

export const getdestById= createAsyncThunk('getdestById',async(id)=>{
    try {
        let docRef = doc(db,'destination',id);

        let destData = await getDoc(docRef)

        return destData.data();
    } catch (error) {
        return error
    }
})

export const updateDest = createAsyncThunk('updateDest',async(data)=>{
    try {
        const docRef = doc(db,'destination',data.id);
        const res = await updateDoc(docRef,data.dest)
        return {msg:"Updated successfully!"}
    } catch (error) {
        return error
    }
})

export const deldest = createAsyncThunk('deldest',async(id)=>{
    try {
        const docRef = doc(db,'destination',id);
        const res =  await deleteDoc(docRef);
        return {msg:"Deleted successfully"}
    } catch (error) {
        return error
    }
})

const DestinationSlice = createSlice({
    name:'destination',
    initialState:{
        dest1:{},
        destMsg:null,
        destError:null,
        destLoader:false,
        destArray:[]
    },
    reducers:{
         clearMessageDest: (state) => {
            state.destMsg = null;
            state.destError = null;
        },
       
    },
    extraReducers:(builder)=>{
        builder.addCase(createDestination.pending,(state,action)=>{
            state.destLoader=true;
        })
        .addCase(createDestination.fulfilled,(state,action)=>{
            
             state.destLoader=false;
             state.destMsg=action.payload.msg;
        })
         .addCase(createDestination.rejected,(state,action)=>{
             state.destLoader=false;
             state.destError=action.payload;
        })
        .addCase(getDestination.pending,(state,action)=>{
            state.destLoader=true;
        })
        .addCase(getDestination.fulfilled,(state,action)=>{
            
             state.destLoader=false;
             state.destArray=action.payload.destination;
        })
         .addCase(getDestination.rejected,(state,action)=>{
             state.destLoader=false;
             state.destError=action.payload;
             })

        .addCase(deldest.pending,(state,action)=>{
            state.destLoader=true;
        })
        .addCase(deldest.fulfilled,(state,action)=>{
            
             state.destLoader=false;
             state.destMsg=action.payload.msg;
        })
         .addCase(deldest.rejected,(state,action)=>{
             state.destLoader=false;
             state.destError=action.payload;
        })
        .addCase(getdestById.pending,(state,action)=>{
            state.destLoader=true;
        })
        .addCase(getdestById.fulfilled,(state,action)=>{
            
             state.destLoader=false;
             state.dest1=action.payload;
        })
         .addCase(getdestById.rejected,(state,action)=>{
             state.destLoader=false;
             state.destError=action.payload;
        })
        .addCase(updateDest.pending,(state,action)=>{
            state.destLoader=true;
        })
        .addCase(updateDest.fulfilled,(state,action)=>{
            
             state.destLoader=false;
             state.destMsg=action.payload.msg;
             state.dest1=null
        })
         .addCase(updateDest.rejected,(state,action)=>{
             state.destLoader=false;
             state.destError=action.payload;
        })
    }
})

const DestinationReducer = DestinationSlice.reducer;
export const { clearMessageDest } = DestinationSlice.actions;

export default DestinationReducer