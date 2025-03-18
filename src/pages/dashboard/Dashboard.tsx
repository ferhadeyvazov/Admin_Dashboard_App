import React from 'react'
import {
  DownloadOutlined,
  EmailOutlined,
  PersonAddAlt1Outlined,
  PointOfSaleOutlined,
  TrafficOutlined
} from '@mui/icons-material'
import { Box, Button, useTheme } from '@mui/material'
import MainLayout from '../../layouts/MainLayout'
import Title from '../../layouts/Title'
import StatBox from '../../features/StatBox'
import { tokens } from '../../redux/reducer/theme/Theme'

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
          <Box gridColumn="span 3" bgcolor={colors.primary[400]} p='10px 25px'>
            <StatBox
            title={'12,361'}
            subtitle={"Emails Sent"}
            progress={0.75}
            increase={"+14%"}
            icon={
              <EmailOutlined
                sx={{ 
                  color:colors.greenAccent[400],
                  fontSize: '26px'
                }}/>
            }
            />
          </Box>

          <Box gridColumn="span 3" bgcolor={colors.primary[400]} p='10px 25px'>
            <StatBox
            title={'431,225'}
            subtitle={"Sales Obtained"}
            progress={0.50}
            increase={"+21%"}
            icon={
              <PointOfSaleOutlined
                sx={{ 
                  color:colors.greenAccent[400],
                  fontSize: '26px'
                }}/>
            }
            />
          </Box>

          <Box gridColumn="span 3" bgcolor={colors.primary[400]} p='10px 25px'>
            <StatBox
            title={'32,441'}
            subtitle={"New Clients"}
            progress={0.30}
            increase={"+5%"}
            icon={
              <PersonAddAlt1Outlined
                sx={{ 
                  color:colors.greenAccent[400],
                  fontSize: '26px'
                }}/>
            }
            />
          </Box>

          <Box gridColumn="span 3" bgcolor={colors.primary[400]} p='10px 25px'>
            <StatBox
            title={'1,325,134'}
            subtitle={"Traffic Received"}
            progress={0.80}
            increase={"+43%"}
            icon={
              <TrafficOutlined
                sx={{ 
                  color:colors.greenAccent[400],
                  fontSize: '26px'
                }}/>
            }
            />
          </Box>

        </Box>
      </Box>

    </MainLayout>
  )
}

export default Dashboard