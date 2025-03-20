import {
    DarkModeOutlined,
    LightModeOutlined, MenuOpenOutlined, MenuOutlined, NotificationsOutlined,
    PersonOutlined, SearchOutlined,
    SettingsOutlined
} from '@mui/icons-material';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import { changeToggle } from "../redux/reducer/sidebar/SidebarSlice";
import { tokens } from "../redux/reducer/theme/Theme";
import { changeMode } from "../redux/reducer/theme/ThemeSlice";

const Topbar: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const sidebar = useAppSelector(state=>state.sidebar);
    const {brokenSidebar, toggleSidebar} = sidebar;
    const dispatch = useAppDispatch();

    return (
        <Box display="flex" justifyContent="space-between" py={2}>
            {
                brokenSidebar&&(
                <IconButton onClick={()=>dispatch(changeToggle())}>
                        {!toggleSidebar ? <MenuOutlined /> : <MenuOpenOutlined />}
                </IconButton>
            )}
            <Box
                display='flex'
                bgcolor={colors.primary[400]} borderRadius="3px"
            >
                <InputBase 
                sx={{ ml: 2, flex: 1 }} 
                placeholder="Search..." 
                name='searchInput'
                />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchOutlined />
                </IconButton>
            </Box>
            {/* ICONS */}
            <Box display="flex" >
                <IconButton onClick={() => dispatch(changeMode())}>
                    {
                        theme.palette.mode === 'dark'
                            ? <DarkModeOutlined />
                            : <LightModeOutlined />
                    }
                </IconButton>
                <IconButton>
                    <NotificationsOutlined />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
                <IconButton>
                    <PersonOutlined />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar