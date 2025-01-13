import React, { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Avatar, Box, IconButton, Typography } from "@mui/material"
import { Link } from "react-router-dom";
// icons
import {
    HomeOutlined, PeopleOutlined,
    ContactsOutlined, ReceiptOutlined, PersonOutlined,
    CalendarTodayOutlined, HelpOutlined, BarChartOutlined, PieChartOutlined,
    TimelineOutlined, MenuOutlined, MenuOpenOutlined, MapOutlined,
    CalendarMonthOutlined
} from "@mui/icons-material";
import AdminImage from "../assets/img/Ferhad.png"

console.log("Sidebar");

const Sidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    return (
        <Box>
            <ProSidebar collapsed={isCollapsed}>
                <Menu>

                    {/* Logo and Menu Icon */}
                    <MenuItem>
                    {
                        !isCollapsed 
                        ?
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Typography variant="h5">Admin Panel</Typography>
                            <IconButton onClick={()=> setIsCollapsed(!isCollapsed)}> 
                                {!isCollapsed ? <MenuOpenOutlined /> : <MenuOutlined/>}
                            </IconButton>
                        </Box>
                        :
                        <IconButton onClick={()=> setIsCollapsed(!isCollapsed)}> 
                            {!isCollapsed ? <MenuOpenOutlined /> : <MenuOutlined/>}
                        </IconButton>
                    }
                    </MenuItem>
                    <MenuItem>
                    {
                        !isCollapsed
                        ?
                        <Box sx={{display: 'flex', flexDirection:"column", 
                                alignItems: 'center', justifyContent: 'space-between'}}>
                            <Avatar src={AdminImage} alt="Farhad Eyvazov" />
                            <Typography variant="h5">Farhad Eyvazov</Typography>
                            <Typography variant="h6">Founder</Typography>
                        </Box>
                        :
                        <Avatar src={AdminImage} />
                    }  
                    </MenuItem>
                    <MenuItem component={<Link to="/" />}
                    icon={<HomeOutlined />}
                    active={true}>
                        <Typography variant="h6">
                            Dashboard
                        </Typography>
                    </MenuItem>
                    <Typography variant="h6"
                    sx={{padding: '1rem 1.2rem .5rem 1.5rem', color: 'grey'}}
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
                        sx={{ padding: '1rem 1.2rem .5rem 1.5rem', color: 'grey' }}
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
                        sx={{ padding: '1rem 1.2rem .5rem 1.5rem', color: 'grey' }}
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
        </Box>
    )
}

export default Sidebar                                                                                                                                                                                                                                               