import {createSlice} from "@reduxjs/toolkit"


const bagSice=createSlice({
    name:'bag',
    initialState:[],//here we store the id of the element of the bag based on that we render the element 
    reducers:{
        addToBag:(state,actions)=>{
            state.push(actions.payload)
            
        },
        removeFromBag:(state,actions)=>{
        
            return state.filter(itemId => itemId!==actions.payload);
        }
    }
})

export const bagAction=bagSice.actions
export default bagSice