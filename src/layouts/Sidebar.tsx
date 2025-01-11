import React, { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, IconButton, Typography } from "@mui/material"
import { Link } from "react-router-dom";
// icons
import {
    HomeMaxOutlined, PeopleOutlined,
    ContactsOutlined, ReceiptOutlined, PersonOutlined,
    CalendarTodayOutlined, HelpOutlined, BarChartOutlined, PieChartOutlined,
    TimelineOutlined, MenuOutlined, MenuOpenOutlined, MapOutlined
} from "@mui/icons-material";

const Sidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    return (
        // <ProSidebar>
        //     <Menu>
        //         <SubMenu label="Charts">
        //             <MenuItem>Pie charts</MenuItem>
        //         </SubMenu>
        //         <MenuItem component={<Link to="/team" />}>Team</MenuItem>
        //     </Menu>
        // </ProSidebar>
        <Box>
            <ProSidebar collapsed={isCollapsed}>
                <Menu>
                    <MenuItem component={<Link to="../" />}>Admin Panel</MenuItem>

                    {/* Logo and Menu Icon */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={!isCollapsed ? <MenuOpenOutlined /> : <MenuOutlined />}
                    >
                    </MenuItem>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar                                                                                                                                                                                                                                               