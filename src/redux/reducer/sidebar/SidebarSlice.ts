import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialType } from "./Type";

const initialState:InitialType = {
    collapseSidebar : false,  // sidebarin baglanmasi
    toggleSidebar : false, // sidebarin yox olmasi
    brokenSidebar : false // responsivelikde sidebar yox olanda true olur
}

export const Sidebar = createSlice({
    name: 'Sidebar',
    initialState,
    reducers: {
        changeCollapse: (state:InitialType):void=>{
            state.collapseSidebar = !state.collapseSidebar;
            console.log(`Deyisdi collapse`);
        },
        changeToggle: (state:InitialType):void=>{
            state.toggleSidebar = !state.toggleSidebar;
            console.log(`Deyisdi toggle`);
        },
        changeBroken: (state:InitialType, actions:PayloadAction<boolean>):void=>{
            state.brokenSidebar = actions.payload;
        },
        changeSidebarWidthPayload: (state:InitialType, actions:PayloadAction<string>)=>{
            if(actions.payload==="collapse") {
                state.collapseSidebar = !state.collapseSidebar;
            }
            else if(actions.payload==="toggle"){
                state.toggleSidebar=!state.toggleSidebar;
            }
            else if(actions.payload==="broken"){
                state.brokenSidebar = !state.brokenSidebar;
                console.log(state);
                
            }
        }
    }

})

export const {changeCollapse, changeToggle, changeBroken, changeSidebarWidthPayload} = Sidebar.actions;