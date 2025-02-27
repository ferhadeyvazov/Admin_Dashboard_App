import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { mockDataContacts } from '../../../mock/contacts'
import { columns } from './Columns'
import { useTheme } from '@mui/material'
import { tokens } from '../../../redux/reducer/theme/Theme'

const DataTable: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <DataGrid
                columns={columns}
                rows={mockDataContacts}
                slots={{ toolbar: GridToolbar }}
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
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[900]} !important`,
                    }
                }}
            />

        </>
    )
}

export default DataTable