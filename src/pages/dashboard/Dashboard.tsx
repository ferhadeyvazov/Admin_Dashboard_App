import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Title from '../../layouts/Title'
import { Box } from '@mui/material'

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <Box m='1.25rem'>
        <Title title='Dashboard' subtitle='Welcome your dashboard' />
      </Box>
    </MainLayout>
  )
}

export default Dashboard