import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import db,{storage} from "../Firebase/db";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createHotel = createAsyncThunk('createHotel',async(data,{rejectWithValue})=>{
    try {
     
        let docRef =  collection(db,"hotel");
        const res = await addDoc(docRef,data);
        console.log(res);
        
        return {msg:"Hotel Created",code:1}
    } catch (error) {
        console.log(error);
        
         return rejectWithValue(error.message);
    }
})

export const getHotel= createAsyncThunk('getHotel',async()=>{
    try {
        let qSnapShort = await getDocs(collection(db,'hotel'));
        let hotelArray=[];

        qSnapShort.forEach((doc)=>{
            hotelArray.push({...doc.data(),id:doc.id})
        })

        return {hotel:hotelArray}
        
    } catch (error) {
        return error
    }
})

export const getHotelById= createAsyncThunk('getHotelById',async(id)=>{
    try {
        let docRef = doc(db,'hotel',id);

        let hotelData = await getDoc(docRef)

        return hotelData.data();
    } catch (error) {
        return error
    }
})

export const updateHotel = createAsyncThunk('updateHotel',async(data)=>{
    try {
        const docRef = doc(db,'hotel',data.id);
        const res = await updateDoc(docRef,data.cat)
        return {msg:"Updated successfully!"}
    } catch (error) {
        return error
    }
})

export const delHotel = createAsyncThunk('delHotel',async(id)=>{
    try {
        const docRef = doc(db,'hotel',id);
        const res =  await deleteDoc(docRef);
        return {msg:"Deleted successfully"}
    } catch (error) {
        return error
    }
})

const HotelSlice = createSlice({
    name:'hotel',
    initialState:{
        singleHotel:{},
        hotelMsg:null,
        hotelError:null,
        hotelLoader:false,
        hotelArray:[]
    },
    reducers:{
         clearMessageHotel: (state) => {
            state.hotelMsg = null;
            state.hotelMsg = null;
        },
     
    },
    extraReducers:(builder)=>{
        builder.addCase(createHotel.pending,(state,action)=>{
            state.hotelLoader=true;
        })
        .addCase(createHotel.fulfilled,(state,action)=>{
            
             state.hotelLoader=false;
             state.hotelMsg=action.payload.msg;
        })
         .addCase(createHotel.rejected,(state,action)=>{
             state.hotelLoader=false;
             state.hotelError=action.payload;
        })
        .addCase(getHotel.pending,(state,action)=>{
            state.hotelLoader=true;
        })
        .addCase(getHotel.fulfilled,(state,action)=>{
            
             state.hotelLoader=false;
             state.hotelArray=action.payload.hotel;
        })
         .addCase(getHotel.rejected,(state,action)=>{
             state.hotelLoader=false;
             state.hotelError=action.payload;
        })
        
        .addCase(delHotel.pending,(state,action)=>{
            state.hotelLoader=true;
        })
        .addCase(delHotel.fulfilled,(state,action)=>{
            
             state.hotelLoader=false;
             state.hotelMsg=action.payload.msg;
        })
         .addCase(delHotel.rejected,(state,action)=>{
             state.hotelLoader=false;
             state.hotelError=action.payload;
        })

        .addCase(getHotelById.pending,(state,action)=>{
            state.hotelLoader=true;
        })
        .addCase(getHotelById.fulfilled,(state,action)=>{
            
             state.hotelLoader=false;
             state.singleHotel=action.payload;
        })
         .addCase(getHotelById.rejected,(state,action)=>{
             state.hotelLoader=false;
             state.hotelError=action.payload;
        })

        .addCase(updateHotel.pending,(state,action)=>{
            state.hotelLoader=true;
        })
        .addCase(updateHotel.fulfilled,(state,action)=>{
            
             state.hotelLoader=false;
             state.hotelMsg=action.payload.msg;
             state.singleHotel=null
        })
         .addCase(updateHotel.rejected,(state,action)=>{
             state.hotelLoader=false;
             state.hotelError=action.payload;
        })
    }
})

const HotelReducer = HotelSlice.reducer;
export const { clearMessageHotel } = HotelSlice.actions;

export default HotelReducer