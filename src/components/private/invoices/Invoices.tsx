import React from 'react'
import MainLayout from '../../../layouts/MainLayout'
import { Box } from '@mui/material'
import Title from '../../../layouts/Title'
import InvoiceTable from './InvoiceTable'

const Invoices: React.FC = () => {
    return (
        <MainLayout>
            <Title
                title='Invoices'
                subtitle='List of Invoices Balances'
            />

            <Box mt="40px" height="75vh" width="100%">
                <InvoiceTable />
            </Box>
        </MainLayout>

    )
}

export default Invoices