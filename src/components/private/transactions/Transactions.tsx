import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../redux/reducer/theme/theme';
import { mockTransactions } from '../../../mock/transactions';

const Transactions: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            gridColumn="span 4"
            gridRow="span 2"
            bgcolor={colors.primary[400]}
            overflow="auto"
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                color={colors.grey[900]}
                p="15px"
            >
                <Typography color={colors.grey[900]} variant='h5' fontWeight="600">
                    Recent Transactions
                </Typography>
            </Box>
            {
                mockTransactions.map((transaction, i) => (
                    <Box
                        key={`${transaction.txId}-${i}`}
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p='0 15px'
                    >
                        <Box>
                            <Typography
                                color={colors.greenAccent[500]}
                                variant='h5'
                                fontWeight='600'
                            >
                                {transaction.txId}
                            </Typography>
                            <Typography color={colors.grey[900]}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[900]}>{transaction.date}</Box>
                        <Box
                            bgcolor={colors.greenAccent[500]}
                            p="5px 10px"
                            borderRadius="4px"
                        >
                            {transaction.cost}
                        </Box>
                    </Box>
                ))
            }
        </Box>

    )
}

export default Transactions