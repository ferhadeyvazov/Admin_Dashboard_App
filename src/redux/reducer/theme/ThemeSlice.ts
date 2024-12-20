import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./Type";

let initialState:IState = {
    mode: 'dark'
}


export const Theme = createSlice({
    name: 'Theme',
    initialState,
    reducers: {
        changeMode: (state:IState)=>{
            state.mode === "light" ? "dark" : "light";
        }
    }

});

export const {changeMode} = Theme.actions