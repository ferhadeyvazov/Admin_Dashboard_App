import React from 'react'
import MainLayout from '../../../layouts/MainLayout'
import Title from '../../../layouts/Title'
import { Box, colors } from '@mui/material'
import GeoChart from './GeoChart'

const Geography: React.FC = () => {
    return (
        <MainLayout>
            <Title
                title='Geography'
                subtitle='Geography Chart for Data Visualization'
            />
            <Box mt="40px" height="75vh" width="100%"
                border={`1px solid ${colors.grey[700]}`}
                borderRadius='4px'>
                <GeoChart isDashboard={false} />
            </Box>
        </MainLayout>
    )
}

export default Geography