import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { useTheme } from '@mui/material'
import { tokens } from '../../../redux/reducer/theme/theme';
import { mockDataInvoices } from '../../../mock/invoices';
import { columns } from './Columns';

const InvoiceTable: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <DataGrid
                columns={columns}
                rows={mockDataInvoices}
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
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[700]} !important`,
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: colors.blueAccent[200],
                        borderTop: "none"
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[900]} !important`,
                    }
                }}
            />

        </>
    )
}

export default InvoiceTable