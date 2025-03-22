import React from 'react';
import { DownloadOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../../redux/reducer/theme/theme';
import LineChart from '../line/LineChart';

const Revenue: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            gridColumn="span 8"
            gridRow="span 2"
            bgcolor={colors.primary[400]}
        >
            <Box
                mt='25px'
                p='0 30px'
                display='flex'
                justifyContent="space-between"
                alignItems="center"
            >
                <Box>
                    <Typography
                        variant='h5'
                        fontWeight="600"
                        color={colors.grey[900]}
                    >
                        Revenue Generated
                    </Typography>
                    <Typography
                        variant='h3'
                        fontWeight="bold"
                        color={colors.greenAccent[500]}
                    >
                        $59,342.32
                    </Typography>
                </Box>
                <Box>
                    <IconButton>
                        <DownloadOutlined
                            sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                        />
                    </IconButton>
                </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
                <LineChart isDashboard />
            </Box>
        </Box>

    )
}

export default Revenue