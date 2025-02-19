import {
    DarkModeOutlined,
    LightModeOutlined, NotificationsOutlined,
    PersonOutlined, SearchOutlined,
    SettingsOutlined
} from '@mui/icons-material';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import React from "react";
import { useAppDispatch } from "../redux/Store";
import { changeMode } from "../redux/reducer/theme/ThemeSlice";
import { tokens } from "../redux/reducer/theme/Theme";

const Topbar: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useAppDispatch();
    console.log("Topbar");

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display='flex'
                bgcolor={colors.primary[900]} borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
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