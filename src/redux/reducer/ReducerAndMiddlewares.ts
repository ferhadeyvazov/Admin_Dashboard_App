import { Sidebar } from "./sidebar/SidebarSlice"
import { Theme } from "./theme/ThemeSlice"
import { RegisterSlice } from "./auth/RegisterSlice"

  export const Reducers = {
    theme: Theme.reducer,
    sidebar: Sidebar.reducer,
    register: RegisterSlice.reducer
  }