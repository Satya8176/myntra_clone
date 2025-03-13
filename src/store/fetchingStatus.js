import {createSlice} from "@reduxjs/toolkit"


const fetchStatusSice=createSlice({
    name:'fetchingStatus',
    initialState:{
        fetchDone:false, 
        currentlFetching:false,   //currentlyfetching true means fetech ho raha and false means ho chuka hai 
    },
    reducers:{
        markFetchDone:(state)=>{
           
            state.fetchDone=true
            
        },
        fetchingStarted:(state)=>{
            state.currentlFetching=true;
            //return 
        },
        fetchingEnded:(state)=>{
            return state.currentlFetching=false;
            // return
        }
    }
})

export const fetchingStatusAction=fetchStatusSice.actions
export default fetchStatusSice;

