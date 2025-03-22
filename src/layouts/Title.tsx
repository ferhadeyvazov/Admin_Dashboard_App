import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../redux/reducer/theme/theme';

type IProps = {
    title: string;
    subtitle?: string;
}
const Title: React.FC<IProps> = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box my='1.25rem'>
            <Typography
                variant='h3'
                fontWeight="bold"
                color={colors.grey[900]}
                marginBottom="5px"
            >
                {title}
            </Typography>
            <Typography
                variant='h6'
                color={colors.greenAccent[600]}
            >
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Title