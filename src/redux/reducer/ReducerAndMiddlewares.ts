import { Sidebar } from "./sidebar/SidebarSlice"
import { Theme } from "./theme/ThemeSlice"

  export const Reducers = {
    theme: Theme.reducer,
    sidebar: Sidebar.reducer
  }