import React from 'react'
import { Box } from '@mui/material'
import MainLayout from '../../../layouts/MainLayout'
import Title from '../../../layouts/Title'
import DataTable from './DataTable'

const Contacts: React.FC = () => {
  return (
    <MainLayout>
      <Title
        title='Contacts'
        subtitle='List of Contacts for Future Reference'
      />

      <Box mt="40px" height="75vh" width="100%">
        <DataTable />
      </Box>
    </MainLayout>
  )
}

export default Contacts