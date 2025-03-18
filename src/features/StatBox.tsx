import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import { tokens } from '../redux/reducer/theme/Theme'
import ProgressCircle from './ProgressCircle'

type IProps = {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    progress: number;
    increase: string;
}
const StatBox: React.FC<IProps> = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box width="100%">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography
                        variant='h4'
                        fontWeight="bold"
                        color={colors.grey[900]}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>

            <Box display="flex" justifyContent="space-between" mt="2px">
                <Typography
                    variant='h5'
                    color={colors.greenAccent[500]}
                >
                    {subtitle}
                </Typography>
                <Typography
                    variant='h5'
                    fontStyle="italic"
                    color={colors.greenAccent[400]}
                >
                    {increase}
                </Typography>
            </Box>
        </Box>
    )
}

export default StatBox