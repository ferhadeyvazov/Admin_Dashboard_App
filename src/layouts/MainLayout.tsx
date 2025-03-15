import { Grid } from '@mui/material';
import React from 'react'
import Sidebar from './Sidebar';
import Topbar from './Topbar';

type IProps = {
    children?: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <Grid container maxWidth="1600px" marginInline="auto" padding={0}>
                <Grid item
                    xs={0} md={3}
                    sx={{
                        "& .ps-sidebar-container": {
                            scrollSnapType: 'y mandatory',
                            scrollbarWidth: "none",
                            scrollBehavior: 'smooth'
                        }
                    }}
                >
                    <Sidebar />
                </Grid>
                <Grid item
                    xs={12} md={9}
                    px={2}>
                    <Topbar />
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default MainLayout