import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import ProgressCircle from '../../../features/ProgressCircle'
import { tokens } from '../../../redux/reducer/theme/theme';

const Campaign: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            gridColumn='span 4'
            gridRow='span 2'
            bgcolor={colors.primary[400]}
            p="30px"
        >
            <Typography variant='h5' fontWeight="600">Campaign</Typography>
            <Box
                display='flex'
                flexDirection='column'
                alignItems="center"
                mt='25px'
            >
                <ProgressCircle size='125' />
                <Typography
                    variant='h5'
                    color={colors.greenAccent[500]}
                    mt='15px'
                >
                    $48,352 revenue generated
                </Typography>
                <Typography>Includes extra misc expenditures and costs</Typography>
            </Box>
        </Box>

    )
}

export default Campaign