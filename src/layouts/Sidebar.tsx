import React, { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem  } from 'react-pro-sidebar';
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom";
// icons
import {
    HomeOutlined,
    ContactsOutlined, PersonOutlined,
    HelpOutlined, BarChartOutlined, PieChartOutlined,
    TimelineOutlined, MenuOutlined, MenuOpenOutlined, MapOutlined,
    CalendarMonthOutlined
} from "@mui/icons-material";
import AdminImage from "../assets/img/Ferhad.png"
import { tokens } from "../redux/reducer/theme/Theme";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import { changeCollapse, changeToggle, changeBroken } from "../redux/reducer/sidebar/SidebarSlice";

const Sidebar: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const sidebar = useAppSelector(state=>state.sidebar);
    const dispatch = useAppDispatch();
    const {collapseSidebar, toggleSidebar}= sidebar;

    return (
        <ProSidebar collapsed={collapseSidebar}
            toggled={toggleSidebar}
            onBackdropClick={() => dispatch(changeToggle())}
            breakPoint="md"
            onBreakPoint={(broken:boolean) => dispatch(changeBroken(broken))}
            rootStyles={{
                backgroundColor: `${colors.primary[400]} !important`,
                height: '100vh',
                top: 0,
                left: 0,
                zIndex: 100,
                borderRight: `1px solid ${colors.grey[100]}`
            }}>
                
            <Menu>
                {/* Logo and Menu Icon */}
                <MenuItem>
                    {
                        !collapseSidebar
                            ?
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Typography variant="h5">Admin Panel</Typography>
                                <IconButton onClick={()=>dispatch(changeCollapse())}>
                                    {!collapseSidebar ? <MenuOpenOutlined /> : <MenuOutlined />}
                                </IconButton>
                            </Box>
                            :
                            <IconButton onClick={()=>dispatch(changeCollapse())}>
                                {!collapseSidebar ? <MenuOpenOutlined /> : <MenuOutlined />}
                            </IconButton>
                    }
                </MenuItem>
                <MenuItem disabled>
                    {
                        !collapseSidebar
                            ?
                            <Box sx={{
                                display: 'flex', flexDirection: "column",
                                alignItems: 'center', justifyContent: 'space-between'
                            }} >
                                <Avatar src={AdminImage} alt="Farhad Eyvazov" />
                                <Typography
                                    margin="10px 0 0 0"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    variant="h5"
                                >
                                    Farhad Eyvazov
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >
                                    Founder
                                </Typography>
                            </Box>
                            :
                            <Avatar src={AdminImage} />
                    }
                </MenuItem>
                <MenuItem style={{ marginTop: '1.2rem' }}
                    component={<Link to="/" />}
                    icon={<HomeOutlined />}
                    active={true}>
                    <Typography variant="h6">
                        Dashboard
                    </Typography>
                </MenuItem>
                <Typography variant="h6"
                    sx={{ padding: '.8rem 0 .1rem 1.5rem', color: 'grey' }}
                >
                    Data
                </Typography>
                <MenuItem
                    component={<Link to="/team" />}
                    title="Manage Team"
                    icon={<BarChartOutlined />}
                >
                    <Typography variant="h6">Manage Team</Typography>
                </MenuItem>
                <MenuItem
                    component={<Link to="/contacts" />}
                    title="Contacts Information"
                    icon={<ContactsOutlined />}
                >
                    <Typography variant="h6">Contacts information</Typography>
                </MenuItem>
                <MenuItem
                    component={<Link to="/invoices" />}
                    title="Invoices Balances"
                    icon={<ContactsOutlined />}
                >
                    <Typography variant="h6">Invoices Balances</Typography>
                </MenuItem>
                <Typography variant="h6"
                    sx={{ padding: '1rem 0 .1rem 1.5rem', color: 'grey' }}
                >
                    Pages
                </Typography>
                <MenuItem
                    component={<Link to="/form" />}
                    title="Profile Form"
                    icon={<PersonOutlined />}
                >
                    <Typography variant="h6">Profile Form</Typography>
                </MenuItem>
                <MenuItem
                    component={<Link to="/calendar" />}
                    title="Calendar"
                    icon={<CalendarMonthOutlined />}
                >
                    <Typography variant="h6">Calendar</Typography>
                </MenuItem>
                <MenuItem
                    component={<Link to="/faq" />}
                    title="FAQ"
                    icon={<HelpOutlined />}
                >
                    <Typography variant="h6">Calendar</Typography>
                </MenuItem>
                <Typography variant="h6"
                    sx={{ padding: '1rem 0 .1rem 1.5rem', color: 'grey' }}
                >
                    Charts
                </Typography>
                <MenuItem
                    component={<Link to="/bar" />}
                    title="Bar Chart"
                    icon={<BarChartOutlined />}
                >
                    <Typography variant="h6">Bar Chart</Typography>
                </MenuItem>
                <MenuItem
                    component={<Link to="/pie" />}
                    title="Pie Chart"
                    icon={<PieChartOutlined />}
                >
                    <Typography variant="h6">Pie Chart</Typography>
                </MenuItem>
                <MenuItem
                    component={<Link to="/line" />}
                    title="Line Chart"
                    icon={<TimelineOutlined />}
                >
                    <Typography variant="h6">Line Chart</Typography>
                </MenuItem>
                <MenuItem
                    component={<Link to="/geography" />}
                    title="Geography Chart"
                    icon={<MapOutlined />}
                >
                    <Typography variant="h6">Geography Chart</Typography>
                </MenuItem>
            </Menu>
        </ProSidebar>
    )
}

export default Sidebar                                                                                                                                                                                                                                               