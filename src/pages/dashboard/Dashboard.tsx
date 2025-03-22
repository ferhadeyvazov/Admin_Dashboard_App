import { DownloadOutlined } from '@mui/icons-material'
import { Box, Button, useTheme } from '@mui/material'
import React from 'react'
import Campaign from '../../components/private/campaign/Campaign'
import Revenue from '../../components/private/revenue/Revenue'
import Sales from '../../components/private/sales/Sales'
import Statistics from '../../components/private/statistics/Statistics'
import Traffic from '../../components/private/traffic/Traffic'
import Transactions from '../../components/private/transactions/Transactions'
import MainLayout from '../../layouts/MainLayout'
import Title from '../../layouts/Title'
import { tokens } from '../../redux/reducer/theme/theme'

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MainLayout>
      {/* BOX TITLE */}
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Title title='Dashboard' subtitle='Welcome your dashboard' />
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: "10px 20px"
          }}
        >
          <DownloadOutlined sx={{ mr: '10px' }} />
          Download Reports
        </Button>
      </Box>

      <Box mt="40px" height="75vh" width="100%">
        {/* GRID and CHARTS */}
        <Box
          display='grid'
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows='140px'
          gap='20px'
        >
          {/* ROW - 1 */}
          <Statistics />
          {/* ROW - 2 */}
          <Revenue />
          <Transactions />
          {/* ROW 3 */}
          <Campaign />
          <Sales />
          <Traffic />
        </Box>
      </Box>

    </MainLayout>
  )
}

export default Dashboard