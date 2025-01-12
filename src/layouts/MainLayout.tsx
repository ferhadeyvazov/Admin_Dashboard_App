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
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9}>
                    <Topbar />
                    {children}
                </Grid>
            </Grid>

        </>
    )
}

export default MainLayout