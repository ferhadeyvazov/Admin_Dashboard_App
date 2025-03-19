import { Box, useTheme } from '@mui/material'
import React from 'react'
import StatBox from '../../../features/StatBox'
import { mockStatistics } from '../../../mock/statistics'
import { iconsMap, IStatistics } from '../../../mock/statistics/type'
import { tokens } from '../../../redux/reducer/theme/Theme'

const Statistics: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const statistics = mockStatistics();

    return (
        <>
            {
                statistics.map((data: IStatistics, i) => {
                    const IconComponent = iconsMap[data.icon];
                    return (
                        <Box
                            gridColumn="span 3"
                            bgcolor={colors.primary[400]}
                            p='10px 25px'
                            key={i}
                        >
                            <StatBox
                                title={data.title}
                                subtitle={data.subtitle}
                                progress={data.progress}
                                increase={data.increase}
                                icon={<IconComponent sx={data.iconStyle} />}
                            />
                        </Box>
                    )
                }
                )
            }
        </>
    )
}

export default Statistics