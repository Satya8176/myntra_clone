import {createSlice} from "@reduxjs/toolkit"


const itemSice=createSlice({
    name:'items',
    initialState:[],
    reducers:{
        addInitialValue:(state,actions)=>{
            
            return actions.payload
        }
    }
})

export const itemsAction=itemSice.actions
export default itemSice