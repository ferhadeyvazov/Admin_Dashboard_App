import React from 'react'
import MainLayout from '../../../layouts/MainLayout'
import Title from '../../../layouts/Title'
import LineChart from './LineChart'
import { Box } from '@mui/material'
0

const Line: React.FC = () => {
    return (
        <MainLayout>
            <Title
                title='Line'
                subtitle='Simple Line Chart for Data Visualization'
            />

            <Box mt="40px" height="75vh" width="100%">
                <LineChart isDashboard={false} />
            </Box>
        </MainLayout>
    )
}

export default Line