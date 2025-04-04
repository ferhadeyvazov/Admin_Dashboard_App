import { Box } from '@mui/material'
import React from 'react'
import MainLayout from '../../../layouts/MainLayout'
import Title from '../../../layouts/Title'
import BarChart from './BarChart'

const Bar: React.FC = () => {
  return (
    <MainLayout>
      <Title
        title="Bar"
        subtitle='Bar Chart for Data Visualization'
      />
      <Box mt="40px" height="75vh" width="100%">
        <BarChart isDashboard={false} />
      </Box>
    </MainLayout>
  )
}

export default Bar