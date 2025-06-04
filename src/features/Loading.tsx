import { Box, CircularProgress, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../redux/reducer/theme/theme';

const Loading: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box sx={{
            height: "100vh",
            display: 'flex',
            alignItems: "center",
            justifyContent: "center"
        }}>
            <CircularProgress
                size="5rem"
                sx={{ color: colors.blueAccent[700] }}
            />
        </Box>
    )
}

export default Loading