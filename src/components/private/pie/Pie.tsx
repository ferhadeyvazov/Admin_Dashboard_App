import React from 'react'
import { Box } from '@mui/material'
import MainLayout from '../../../layouts/MainLayout'
import Title from '../../../layouts/Title'
import { mockPieData } from '../../../mock/pieData'
import PieChart from './PieChart'

const Pie: React.FC = () => {
    return (
        <MainLayout>
            <Title
                title="Pie"
                subtitle='Simple Pie Chart'
            />
            <Box mt="40px" height="75vh" width="100%">
                <PieChart data={mockPieData} />
            </Box>
        </MainLayout>
    )
}

export default Pie