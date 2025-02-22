import React from 'react'
import MainLayout from '../../../layouts/MainLayout'
import Title from '../../../layouts/Title'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../../redux/reducer/theme/Theme'
import { mockDataTeam } from '../../../mock/team'
import {
  AdminPanelSettingsOutlined,
  SecurityOutlined
} from '@mui/icons-material'
import { columns } from './Columns'

const Team: React.FC = () => {
  return (
    <MainLayout>
      <Box my='1.25rem'>
        <Title
          title='Manage Team'
          subtitle='Managing the team members' />
      </Box>

      <Box mt="40px" height="75vh">
        <DataGrid
        columns={columns}
        rows={mockDataTeam}
        checkboxSelection
        pageSizeOptions={[5, 10, 15, 20]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
        />
          
      </Box>
    </MainLayout>
  )
}

export default Team