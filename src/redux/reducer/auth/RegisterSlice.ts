import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {initialType} from "./Type"


const initialState:initialType = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

export const RegisterSlice = createSlice({
    name: "Register",
    initialState,
    reducers: {
        register: (state:initialType, actions:PayloadAction<initialType>)=>{
            if(actions.payload){
                state=actions.payload;
            }
            return state;
        }
    }
})

export const {register} = RegisterSlice.actions;

