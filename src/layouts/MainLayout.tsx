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
            <Grid container maxWidth="1600px" marginInline="auto" border="solid red 3px" padding={0}>
                <Grid item border="1px solid white"
                xs={0} md={3}
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
                <Grid item 
                xs={12} md={9} border="1px solid lightgreen"
                px={2}>
                    <Topbar />
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default MainLayout