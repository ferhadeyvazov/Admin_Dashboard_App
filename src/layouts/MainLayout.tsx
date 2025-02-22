import { Container, Grid } from '@mui/material';
import React from 'react'
import Sidebar from './Sidebar';
import Topbar from './Topbar';

type IProps = {
    children?: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <Grid container gap={{xs: 1, md: 3}} maxWidth="1600px" marginInline="auto" border="solid red 2px" padding={0}>
                <Grid item border="1px solid white"
                xs={2} md={2} lg={3}
                sx={{
                    "& .ps-sidebar-container": {
                        scrollSnapType: 'y mandatory',
                        scrollbarWidth: "none",
                        scrollBehavior : 'smooth'
                    }
                }}
                >
                    <Sidebar />
                </Grid>
                <Grid item xs={7} md={6} lg={7}>
                    <Topbar />
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default MainLayout