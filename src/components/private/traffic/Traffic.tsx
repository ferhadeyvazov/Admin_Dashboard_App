import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../../redux/reducer/theme/Theme';
import GeoChart from '../geography/GeoChart';

const Traffic: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            gridColumn="span 4"
            gridRow="span 2"
            bgcolor={colors.primary[400]}
            padding="30px"
        >
            <Typography
                variant='h5'
                fontWeight="600"
                mb="15px"
            >
                Geography Based Traffic
            </Typography>
            <Box height='200px'>
                <GeoChart isDashboard />
            </Box>
        </Box>

    )
}

export default Traffic