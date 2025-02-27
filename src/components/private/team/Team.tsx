import React from 'react'
import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import MainLayout from '../../../layouts/MainLayout'
import Title from '../../../layouts/Title'
import { mockDataTeam } from '../../../mock/team'
import { tokens } from '../../../redux/reducer/theme/Theme'
import { columns } from './Columns'

const Team: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MainLayout>
      <Box my='1.25rem'>
        <Title
          title='Manage Team'
          subtitle='Managing the team members' />
      </Box>

      <Box mt="40px" height="75vh" width="100%">
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
          sx={{
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: colors.blueAccent[200],
              borderBottom: "none"
            },
            "& .MuiDataGrid-cell": {
              border: "none"
            },
            "& .MuiDataGrid-root": {
              border: "none"
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: colors.blueAccent[200],
            }
          }}
        />

      </Box>
    </MainLayout>
  )
}

export default Team