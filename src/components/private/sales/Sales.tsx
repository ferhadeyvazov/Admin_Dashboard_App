import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import BarChart from '../bar/BarChart'
import { tokens } from '../../../redux/reducer/theme/Theme';

const Sales: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            gridColumn="span 4"
            gridRow="span 2"
            bgcolor={colors.primary[400]}
        >
            <Typography
                variant='h5'
                fontWeight="600"
                p='30px 30px 0 30px'
            >
                Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
                <BarChart isDashboard />
            </Box>
        </Box>

    )
}

export default Sales