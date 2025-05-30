import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialLoginType } from "./Type";

const initialState:initialLoginType = {
    email: '',
    password: ''
}
export const LoginSlice = createSlice({
name:"Login",
initialState,
reducers: {
    login:(state:initialLoginType,actions:PayloadAction<initialLoginType>)=>{
        if(actions.payload){
            state=actions.payload;
        }
        return state;
    }
}
})

export const {login} = LoginSlice.actions