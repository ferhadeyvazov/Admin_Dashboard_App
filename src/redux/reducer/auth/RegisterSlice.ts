import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {initialType} from "./Type"
import sendRegister from "../../../servers/apiRegister";


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
                sendRegister(state);
            }
            return state;
        }
    }
})

export const {register} = RegisterSlice.actions;

