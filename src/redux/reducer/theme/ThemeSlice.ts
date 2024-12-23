import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./Type";

let initialState:IState = {
    mode: 'dark'
}


export const Theme = createSlice({
    name: 'Theme',
    initialState,
    reducers: {
        changeMode: (state:IState):void=>{
            state.mode = state.mode === "dark" ? "light" : "dark";
            console.log(`Deyisdi ${state.mode}`);
            
        }
    }

});

export const {changeMode} = Theme.actions